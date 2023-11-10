![Banner](./notes_app/assets/Banner.png)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology<a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#farther-app-development">Farther app development</li>
    <li><a href="#screenshots">Screenshots</a></li>
  </ol>
</details>

## About The Project

This is a small note app that can add or delete notes in different categories and run on a simple server as its database (JSON-Server) for saving data.

# ![A screenshot of the app ](./notes_app/assets/Note_APP.png)

### Features

- Can create categories with different notes in it
- Add notes or delete them
- Modify notes and save them on the server
- Search through notes to find the one you want
- Every data is saved in a file in JSON format

### Technology

- **[React:](https://react.dev/)** React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and dynamic web applications with reusable components.

- **[Node.js:](https://nodejs.org/en)** Node.js is a runtime environment that allows you to run JavaScript on the server-side. It's commonly used for building scalable network applications and server-side scripting.

- **[JSON-Server:](https://www.npmjs.com/package/json-server)** JSON-Server is a simple and convenient tool for quickly creating a RESTful API using JSON data. It's often used for mock APIs and prototyping, making it easy to simulate server behavior with JSON files as data sources.

## Getting Started

### Prerequisites

- You should have installed [Node.js](https://nodejs.org/en)

### Installation

1. Clone the repository

```shell
git clone -b Note_App https://github.com/Elio-Aliaj/reactjs-interview-task.git
```

2. Install NPM packages

```shell
cd .\reactjs-interview-task\notes_app\
```

```shell
npm install
```

## Usage

1. To run the app:

```shell
npm start
```

2. Open another CMD to run the server:

```shell
cd .\notes_app\src\Data\
```

```shell
npx json-server --watch db.json --port 8000
```

3. The app can be accessed in the browser at http://localhost:3000

## Farther app development

- **To make the app more secure:**
  - Make a register, login and password
  - Encrypt the database
  - Create end-to-end encryption
  - Keeping the code up to date
  - Input Validation and Sanitization
- **Scale to millions of users**
  - Use a database like Oracle, MySQL, or Microsoft SQL Server
  - Three typically common types of database scalability:
    - _Scaling Up_: adding more resources to a single server
    - _Scaling Down_: distributing the database across multiple servers
    - _Read and Write_: scaled separately for read and write operations
  - Backups and Disaster Recovery

## Screenshots

<img src="./notes_app/assets/Default.png">
<img src="./notes_app/assets/Create_category.png">
<img src="./notes_app/assets/Note_open.png">
<img src="./notes_app/assets/Note_Selected.png">
<img src="./notes_app/assets/Search.png">
