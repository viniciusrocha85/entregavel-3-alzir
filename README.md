## Calculadora Express utilizando API com Postman

Este guia passo a passo detalhado demonstra como criar uma API de calculadora completa utilizando Node.js e Express, incluindo instruções para testar a API com o Postman.

### Pré-requisitos

* VS Code (Visual Studio Code) instalado
* Node.js instalado
* npm (Node Package Manager) instalado

**Se você ainda não tem o Node.js e o npm instalados, siga as instruções abaixo:**

#### Instalando o Node.js e npm

**Windows:**

1. Acesse [Node.js Downloads](https://nodejs.org/en/download/) e baixe o instalador do Node.js.
2. Execute o instalador e siga as instruções para instalar o Node.js e o npm.

**macOS:**

1. Você pode instalar o Node.js e o npm usando o Homebrew:

```bash
brew install node
```

**Linux (Ubuntu/Debian):**

1. Você pode instalar o Node.js e o npm usando o apt:

```bash
sudo apt update
sudo apt install nodejs npm
```

### Inicializando o Projeto

1. Crie uma nova pasta para o projeto e navegue até ela:

```bash
mkdir calculadora-express
cd calculadora-express
```

2. Inicialize um novo projeto Node.js:

```bash
npm init -y
```

Isso irá criar os seguintes arquivos:

* `package.json`
* `package-lock.json`
* `README.md` (este arquivo)

### Instalando o Express

1. Instale o Express:

```bash
npm install express
```

Isso irá criar os seguintes arquivos:

* `node_modules` (contém os pacotes instalados)

### Estrutura do projeto

Crie uma estrutura de pasta exatamente igual a essa à seguir (os arquivos html, css e o script.js serão criados no futuro):

```
calculadora-express/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── server.js
```

### Descrição dos Arquivos

* **public/**: Pasta contendo os arquivos estáticos para o frontend da aplicação.
    * **index.html**: Arquivo HTML principal.
    * **styles.css**: Arquivo CSS para estilização.
    * **script.js**: Arquivo JavaScript para funcionalidades do frontend.
* **server.js**: Arquivo principal do servidor Express que contém a lógica da API de calculadora.

### Criando a API de Calculadora

1. Crie um arquivo chamado `server.js` na pasta do seu projeto e adicione o seguinte código para configurar um servidor Express básico e implementar as funcionalidades da API de calculadora:

```javascript
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/calculadora-express', (req, res) => {
  const { a, b, operacao } = req.body;

  let resultado;

  switch (operacao) {
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      if (b === 0) {
        return res.status(400).send('Erro: Divisão por zero.');
      }
      resultado = a / b;
      break;
    default:
      return res.status(400).send('Erro: Operação inválida.');
  }

  res.json({ resultado });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
```


**Explicação do código:**

* **`express`**: Importa o módulo `express` para criar o aplicativo Express.
* **`app`**: Cria uma instância do aplicativo Express.
* **`port`**: Define a porta em que o servidor será executado (3001 neste caso).
* **`app.use(express.json())`**: Configura o middleware `express.json()` para que o Express possa lidar com requisições JSON.
* **`app.post('/entregavel3', (req, res) => {...})`**: Define uma rota POST para a API de calculadora, acessível em `/calculadora-express`.
    * **`req`**:
