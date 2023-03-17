<h2 align="center">Projeto Clone do Whatsapp Web</h2>

## Descrição

Projeto que visa replicar a icônica interface de usuário do Whatsapp Web e suas funcionalidades, oferecendo uma experiência de uso semelhante à do software original, onde os usuários podem facilmente se conectar, enviar mensagens e conversar em tempo real.

## Tecnologias Utilizadas

* React
* Vite
* Sass
* Firebase Store
* Firebase Database
* Firebase Auth
* Facebook App Auth

## Funcionalidades

* Login seguro com uma conta do Facebook
* Iniciar conversas com contatos previamente logados
* Enviar mensagens
* Enviar imagens
* Speech-to-Text (Google Chrome e Edge)
* Pesquisar por conversas e contatos

## Como Executar o Projeto

<h4><a href="https://joaopedrolt.github.io/whatsapp-clone-reactjs/">Você pode acessar esse projeto clicando aqui</a></h3>
> Possibilidade de haver delay ou indisponibilidade por conta do host

#### Instalação Local

1. Clonar ou fazer download do projeto.
2. Instale as dependências do projeto
```bash
npm install
```
3. Crie um projeto no Firebase Console e habilite o Firebase Authentication, Firebase Database, Firebase Store.
4. Copie as credenciais do Firebase e crie um arquivo chamado FirebaseConfig.js na pasta ./src seguindo os padrões do arquivo firebaseConfig.copy.js como exemplo. Adicione as credenciais no arquivo:
```bash
export default {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
```



