# Chatbot Application

A simple chatbot application with a **React-based frontend** and a **Node.js/Express backend**, connected to a **MySQL database**. The chatbot responds to user messages with predefined replies and stores the chat history in a database.

---

## Features

- **Send and Receive Messages**: Users can send messages, and the bot replies with appropriate responses.
- **Database Integration**: Chat history is stored and retrieved from a MySQL database.
- **Interactive UI**: Clean and responsive design using **Tailwind CSS**.
- **Predefined Bot Replies**: Handles common queries like greetings, jokes, and help.
- **API Integration**: Fetches jokes from an external API for dynamic responses.

---

## Tech Stack

### Frontend

- **React.js**
- **Tailwind CSS**

### Backend

- **Node.js**
- **Express.js**
- **MySQL**
- **NLP**

### External APIs

- [Official Joke API](https://official-joke-api.appspot.com/)

---

## Prerequisites

Before starting, make sure you have the following installed on your system:

- **Node.js** (v14+)
- **MySQL** database or a free hosted MySQL database (e.g., [freesqldatabase.com](https://www.freesqldatabase.com/))
- **NPM** (Node Package Manager)

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/JatinDhamija816/chatbot
cd chatbot
```

## Backend Setup

### Navigate to the backend directory:

```bash
cd server
```

### Install backend dependencies:

```bash
npm install
```

### Create a .env file in the server directory and add your database credentials:

```bash
PORT=8000
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
DB_PORT=3306
```

### Create the MySQL database and table:

```bash
CREATE DATABASE chatbot_db;

USE chatbot_db;

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_message TEXT NOT NULL,
    bot_reply TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

### Start the backend server:

```bash
npm run dev
```

## Frontend Setup

### Navigate to the frontend directory:

```bash
cd ../client
```

### Install frontend dependencies:

```bash
npm install
```

### Start the frontend server:

```bash
npm run dev
```

## Usage

- Open your browser and navigate to the frontend URL (default is http://localhost:5173).
- Type a message in the input box and press Enter or click the Send button.
- The bot will respond, and the conversation will be displayed in the chat window.
