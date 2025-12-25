# Travel Tracker App 🌍

A fullstack Travel Tracker application that allows users to track visited countries on an interactive world map.
The app supports multiple users, stores visited countries in a database, and visually highlights them on the map.

Built with **Express**, **EJS**, and **PostgreSQL**.

---

## 🚀 Features

- Add and track visited countries
- Interactive SVG world map with highlighted countries
- Multiple users with individual colors
- User switching and creation
- Server-side rendering with EJS
- Persistent data storage using PostgreSQL
- Graceful handling of invalid country input

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **EJS** (server-side templates)
- **PostgreSQL**
- **pg**
- **dotenv**
- **body-parser**
- HTML / CSS

---

## 📸 How It Works

- Users are stored in the database with a unique color
- Each user has their own list of visited countries
- Countries are added via form input
- Visited countries are highlighted on the SVG map dynamically
- The total number of visited countries is calculated per user

---

## ▶️ Running the Project Locally

Install dependencies:

bash
npm install
Create a .env file in the root directory:

env
PORT=3000
USER=your_db_user
HOST=your_db_host
DATABASE=your_db_name
PASSWORD=your_db_password
Start the server:

bash
node index.js
or (recommended for development):
bash
nodemon index.js

Open in browser:
http://localhost:3000

🗄 Database Structure (Simplified)
users
id
name
color
countries
country_name
country_code
visited_countries
user_id
country_code

## 📂 Project Type

Fullstack JavaScript Application
(Server-side rendering with Express + EJS)

This project demonstrates:
Backend logic
Database relationships
Server-side rendering
Basic multi-user functionality

## 📝 Notes

This is a learning & portfolio project
Focused on backend fundamentals and clean data flow
