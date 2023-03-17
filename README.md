<h2 align="center">Projeto Clone do Whatsapp Web</h2>

* [Descrição](#Descrição)
* [Tecnologias Utilizadas](#Tecnologias-Utilizadas)
* [Supported Architectures](#supported-architectures)
* [Choose How to Install](#choose-how-to-install)
   * [Install Hugo as Your Site Generator (Binary Install)](#install-hugo-as-your-site-generator-binary-install)
   * [Build and Install the Binary from Source (Using the Go toolchain)](#build-and-install-the-binary-from-source-using-the-go-toolchain)
* [The Hugo Documentation](#the-hugo-documentation)
* [Contributing to Hugo](#contributing-code-to-hugo)
* [Dependencies](#dependencies)

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
4. Crie um App no Facebook Apps, habilite o produto Facebook Login e o configure como o Firebase Auth.
5. Copie as credenciais do Firebase e crie um arquivo chamado FirebaseConfig.js na pasta ./src seguindo os padrões do arquivo firebaseConfig.copy.js como exemplo. Adicione as seguintes credenciais no arquivo FirebaseConfig.js:
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
6. Inicie o projeto em modo desenvolvimento:
```bash
    npm run dev
```
## Autoria

Este projeto foi criado por mim, João Pedro Lima Teixeira, como uma iniciativa pessoal para desenvolver minhas habilidades em React e outras tecnologias envolvidas no projeto.

## Imagens do Projeto

<div><img src="http://drive.google.com/uc?export=view&id=1w2RoarqaIuvTxtcBMmb_h4l8ecGlGHYD" width=600 alt="Login" /></div>
<div><img src="http://drive.google.com/uc?export=view&id=13E-3pi79DVQLAAqtjKFJcgGYTH0hLd0_" width=600 alt="Main" /></div>
<div><img src="http://drive.google.com/uc?export=view&id=1MTCX2HeLGcimkePnfVa_DIJ3qflKTlo_" width=600 alt="Chat" /></div>
