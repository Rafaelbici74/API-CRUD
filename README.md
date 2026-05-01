# API CRUD com Node.js e SQL

API REST desenvolvida utilizando **Node.js** e **Express** com integração a **banco de dados SQL**, implementando as operações básicas de um sistema **CRUD (Create, Read, Update e Delete)**.

Este projeto foi desenvolvido durante as aulas de **Desenvolvimento Web**, com o objetivo de praticar a criação de APIs, manipulação de banco de dados e estruturação de rotas, servindo também como preparação para o **TCC que será desenvolvido no final do ano**.

---

# 🚀 Tecnologias utilizadas

- Node.js
- Express
- SQL Server
- JavaScript

---

# 📌 Funcionalidades da API

A API permite realizar as seguintes operações:

- Criar novos usuários no banco de dados
- Consultar usuários cadastrados
- Atualizar informações de usuários
- Excluir usuários do sistema

Todas as respostas da API são retornadas no formato **JSON**, simulando a comunicação entre **Back-end e aplicações clientes**.

---

# 📂 Estrutura do projeto

```
API-CRUD
│
├── node_modules
├── routes
├── controllers
├── database
├── server.js
├── package.json
```

---

# ⚙️ Como executar o projeto

Para executar a API é necessário ter o **Node.js instalado**.

### 1️⃣ Abrir o terminal

Abra o terminal do Windows digitando:

```
cmd
```

### 2️⃣ Acessar a pasta do projeto

```
cd api-mvc
```

### 3️⃣ Iniciar a API

```
node server.js
```

Após executar o comando, a API será iniciada e estará pronta para receber requisições.

---

# 🔗 Endpoints da API

### Buscar usuários
```
GET /usuarios
```

### Criar usuário
```
POST /usuarios
```

### Atualizar usuário
```
PUT /usuarios/:id
```

### Deletar usuário
```
DELETE /usuarios/:id
```

---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais de **desenvolvimento Back-end**, incluindo:

- Criação de APIs REST
- Manipulação de banco de dados SQL
- Estruturação de rotas
- Organização de código em Node.js

Também faz parte da preparação para o **Trabalho de Conclusão de Curso (TCC)**.

---

# 👨‍💻 Autor

Desenvolvido por **Rafael Ladeira**

GitHub:  
https://github.com/Rafaelbici74
