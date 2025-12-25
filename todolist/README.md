# Todo List App ✅

A fullstack Todo List application built with **Express**, **EJS**, and **MongoDB**.  
The app allows users to manage daily tasks as well as create unlimited custom lists dynamically via URL routes.

## Live URL: https://todolist-5ek9.onrender.com/

---

## 🚀 Features

- Add and delete todo items
- Default **Today** list
- Dynamic custom lists (e.g. `/Work`, `/Shopping`, `/Travel`)
- Persistent data storage with MongoDB
- Server-side rendering using EJS
- Automatic creation of new lists
- Clean and minimal UI

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **EJS** (server-side templates)
- **MongoDB**
- **Mongoose**
- **Lodash**
- HTML / CSS

---

## 📸 How It Works

- The **Today** list is shown on the home page (`/`)
- Users can create custom lists by visiting a URL: `/Work`
- Each list has its own items stored in MongoDB
- Items can be added and removed dynamically
- Default tasks are inserted automatically for new lists

## ▶️ Running the Project Locally

Install dependencies:

bash

npm install

Create a .env file in the root directory:

PORT=5000

MONGODB_URI=your_mongodb_connection_string

Start the server:

nodemon app.js

Open in browser:

http://localhost:5000

## 📂 Project Type

Fullstack JavaScript Application

(Server-side rendering with Express + EJS)

This project demonstrates:

Backend routing

Database modeling with MongoDB

Dynamic URL-based content

CRUD operations

## 📝 Notes

Portfolio & learning project

Focused on backend logic and data persistence
