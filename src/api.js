import firebase from 'firebase/compat/app';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();

export default {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebaseApp.auth().signInWithPopup(provider);
        return { user: result.user, accessToken: result.credential.accessToken };
    },
    addUser: async (u) => {
        await db.collection('users').doc(u.id).set({
            name: u.name,
            avatar: u.avatar
        }, { merge: true });
    },
    getContactList: async (userId) => {
        let list = [];
        let results = await db.collection('users').get();
        results.forEach(result => {
            let data = result.data();
            if (result.id !== userId) {
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar
                })
            }
        })
        return list;
    },
    addNewChat: async (user, user2) => {
        let u = await db.collection('users').doc(user.id).get();
        let uData = u.data();
        let areadyExists = false;

        if (uData.chats) {
            for (let i in uData.chats) {
                if (uData.chats[i].with == user2.id) {
                    areadyExists = true;
                }
            }
        }

        if (!areadyExists) {
            let newChat = await db.collection('chats').add({
                messages: [],
                newChat: true,
                users: [user.id, user2.id]
            });

            await db.collection('users').doc(user.id).update({
                chats: firebase.firestore.FieldValue.arrayUnion({
                    chatId: newChat.id,
                    image: user2.avatar,
                    title: user2.name,
                    with: user2.id
                })
            });

            await db.collection('users').doc(user2.id).update({
                chats: firebase.firestore.FieldValue.arrayUnion({
                    chatId: newChat.id,
                    title: user.name,
                    image: user.avatar,
                    with: user.id
                })
            });
        } else {
            alert('Chat já existente!')
        }
    },
    onChatListUpdate: (userId, setChatList) => {
        return db.collection('users').doc(userId).onSnapshot((doc) => {
            if (doc.exists) {
                let data = doc.data();
                if (data.chats) {
                    let chats = [...data.chats];

                    chats.sort((a, b) => {
                        if (a.lastMessageDate === undefined) {
                            return -1;
                        }
                        if (b.lastMessageDate === undefined) {
                            return -1;
                        }

                        if (a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
                            return 1;
                        } else {
                            return -1;
                        }
                    });

                    setChatList(data.chats);
                }
            }
        });
    },
    onChatMessagesUpdate: (chatId, setMessagesList, setUsers) => {
        return db.collection('chats').doc(chatId).onSnapshot((doc) => {
            if (doc.exists) {
                let data = doc.data();
                setMessagesList(data.messages);
                setUsers(data.users);
            }
        });
    },
    updateNotificationsStatus: async (userId, chatId) => {
        let user = db.collection('users').doc(userId);
        let userInfo = await user.get();
        let userData = userInfo.data();
        let chats = [...userData.chats];

        for (let i in chats) {
            if (chats[i].chatId == chatId) {
                chats[i].unreadMessage = false;
                await user.update({
                    chats
                });
            }
        }
    },
    sendMessage: async (chatId, userId, body, users) => {
        let now = new Date();
        const chatDoc = db.collection('chats').doc(chatId);

        await chatDoc.get().then(async (doc) => {
            if (doc.exists) {
                let chat = doc.data();
                let dateObject = chat.lastDate;

                if (chat.newChat) {
                    await db.collection('chats').doc(chatId).update({
                        newChat: false
                    });
                }

                if (dateObject) {
                    let dateString = dateObject.toDate();
                    let date = new Date(dateString);

                    if (!(now.getDate() == date.getDate() && now.getMonth() == date.getMonth() && now.getFullYear() == date.getFullYear())) {
                        await chatDoc.update({
                            lastDate: now
                        }).then(async () => {
                            await chatDoc.update({
                                messages: firebase.firestore.FieldValue.arrayUnion({
                                    authorId: '',
                                    body: '',
                                    sentDate: now,
                                    type: 'timeStamp',
                                })
                            })
                        });
                    }
                } else {
                    await chatDoc.update({
                        lastDate: now
                    }).then(async () => {
                        await chatDoc.update({
                            messages: firebase.firestore.FieldValue.arrayUnion({
                                authorId: '',
                                body: '',
                                sentDate: now,
                                type: 'timeStamp',
                            })
                        })
                    });
                }
            }
        })

        await db.collection('chats').doc(chatId).update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                authorId: userId,
                body,
                sentDate: now,
                type: 'text',
            })
        })

        for (let i in users) {
            let u = await db.collection('users').doc(users[i]).get();
            let uData = u.data();
            let chats = [...uData.chats];

            if (users[i] != userId) {
                for (let e in chats) {
                    if (chats[e].chatId == chatId) {
                        chats[e].unreadMessage = true;
                    }
                }
            }

            if (uData.chats) {
                for (let e in chats) {
                    if (chats[e].chatId == chatId) {
                        chats[e].lastMessage = body;
                        chats[e].lastMessage = body;
                        chats[e].lastMessageDate = now;
                    }
                }

                setTimeout(async () => {
                    await db.collection('users').doc(users[i]).update({
                        chats
                    })
                }, 400);
            }
        }
    },
    newMessageStatus: async (chatId, setLoading, isLoading, messagesListLength) => {
        const chatDoc = db.collection('chats').doc(chatId);
        await chatDoc.get().then((doc) => {
            if (doc.exists) {
                let chat = doc.data();
                if (chat.newChat) {
                    setLoading(false);
                } else if (!chat.newChat && isLoading && messagesListLength > 0) {
                    setLoading(false);
                }
            }
        })
    },
    sendImageMessage: async (file, chatId, userId) => {
        let now = new Date();
        const chatDoc = db.collection('chats').doc(chatId);
        const storageRef = ref(storage, `images/${chatId}/${v4()}`);

        uploadBytesResumable(storageRef, file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async (url) => {
                    await chatDoc.update({
                        messages: firebase.firestore.FieldValue.arrayUnion({
                            authorId: userId,
                            body: url,
                            sentDate: now,
                            type: 'image',
                        })
                    });
                });
            }).catch(() => {
                alert('Erro ao carregar imagem!');
            });
    }
};