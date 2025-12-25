# ☕️ Coffee Store Backend API

A simple backend API built with **Node.js**, **Express**, and **MongoDB**.  
This server provides read-only endpoints to fetch products and filters for a coffee store or e-commerce frontend.

---

## 🚀 Features

- REST API built with Express
- MongoDB integration using native MongoDB driver
- CORS enabled for frontend access
- JSON responses
- Environment-based configuration
- Lightweight and easy to extend

---

## 🛠 Tech Stack

- Node.js
- Express
- MongoDB (native driver)
- cors
- nodemon (development)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net

DB_NAME=your_database_name

---

## ▶️ Installation & Run

Install dependencies:

bash

npm install

Start the server:

nodemon index.js

Server runs on:

http://localhost:1000

---

## 🔐 Notes & Limitations

No authentication (public API)

Read-only endpoints

MongoDB connection is established per request

Designed to be consumed by a frontend app (React / React Native)

---

## 📌 Project Type

Backend API for a coffee store / product catalog

---
