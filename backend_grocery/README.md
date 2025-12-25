# 🛒 Grocery App Backend API

A modular backend API for a grocery store application built with **Node.js**, **Express**, and **PostgreSQL**.

The backend handles **user authentication**, **product listings**, **payments (Stripe)**, and supports multiple app flows.

---

## 🚀 Features

- User authentication (JWT + cookies)
- Secure password hashing with bcrypt
- Product listings management
- Stripe payment integration
- Modular route structure
- PostgreSQL database connection
- CORS configuration with credentials
- Environment-based configuration

---

## 🛠 Tech Stack

- Node.js
- Express
- PostgreSQL
- pg
- bcryptjs
- jsonwebtoken (JWT)
- Stripe
- cors
- cookie-parser
- dotenv

---

## 🔐 Security Notes

Passwords are hashed using bcrypt

JWT is used for authentication

Cookies are HTTP-only

CORS restricted to APP_URL

Environment variables are required

---

## 📌 Project Type

Backend API for a full-stack grocery application

Designed to be consumed by a frontend (e.g. React / React Native)

---
