# Todo List

A simple Todo List application built with Express, MongoDB, and EJS.

## Description

This is a web application that allows users to create, manage, and track their tasks or to-do items. It provides features such as adding tasks, marking tasks as completed, editing task details, and removing tasks.

The application is built using Express.js as the backend framework, MongoDB as the database for storing tasks, and EJS (Embedded JavaScript) as the templating engine for rendering dynamic web pages.

## Features

- Create new tasks
- Mark tasks as completed
- Edit task details
- Remove tasks

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rithikraj7/to-do-list.git

1. Navigate to the project directory: `cd to-do-list`
2. Install the dependencies: `npm install'
3. Set up the MongoDB database: 
  Create a MongoDB Atlas account and set up a cluster.
  Obtain the connection URI.
  Replace `DB_CONNECT` in the .env file with your MongoDB connection URI.
4. Start the server: `npm start `
5. Open your browser and go to ``http://localhost:3000`` to access the Todo List application.

## Dependencies

The project relies on the following dependencies:

- express: ^4.18.2
- mongoose: ^7.2.2
- ejs: ^3.1.9
- dotenv: ^16.1.3

These dependencies are automatically installed when running the following command:

```bash
npm install

## License

This project is licensed under the [MIT License](LICENSE)



