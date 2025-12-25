# Secrets App 🔐

A fullstack authentication-based application where users can register, log in, and share anonymous secrets.  
The app supports **local authentication**, **Google OAuth**, **sessions**, and **password reset via email**.

Built with **Express**, **EJS**, **MongoDB**, and **Passport.js**.

---

## 🚀 Features

- User registration and login
- Local authentication (username & password)
- Google OAuth 2.0 authentication
- Session-based authentication
- Protected routes
- Submit and view anonymous secrets
- Password reset via email (Nodemailer)
- Change password functionality
- Secure password hashing with Passport Local Mongoose

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **EJS** (server-side templates)
- **MongoDB**
- **Mongoose**
- **Passport.js**
- **Passport Local & Google OAuth**
- **express-session**
- **Nodemailer**
- **dotenv**
- HTML / CSS

---

## 🔐 Authentication Flow

- Users can:
  - Register with email & password
  - Log in with email & password
  - Log in using Google OAuth
- Sessions are stored securely using `express-session`
- Protected routes require authentication
- Logged-in users can submit secrets anonymously

---

## ✉️ Password Reset

- Users can request a password reset via email
- A secure reset link is sent using Nodemailer
- Passwords are updated securely using Passport Local Mongoose

---

## ▶️ Running the Project Locally

Install dependencies:

bash
npm install

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

CLIENT_ID=google_oauth_client_id
CLIENT_SECRET=google_oauth_client_secret
APP_URL=http://localhost:5000

EMAIL_ADDRESS=your_email@gmail.com
EMAIL_PASSWORD=your_email_app_password

Start the server:
node app.js
or (recommended for development):
nodemon app.js

Open in browser:
http://localhost:5000

---

## 🗄 Database Structure (Simplified)

User
username
password (hashed)
googleId
secrets (array)

---

## 📂 Project Type

Fullstack JavaScript Application
(Server-side rendering + authentication)

This project demonstrates:
Authentication & authorization
OAuth integration
Session management
Secure password handling
Email-based password reset
Protected routes

## 📝 Notes

Portfolio & learning project
Focused on authentication flows and security
No sensitive credentials are stored in the repository
Environment variables are required to run the app

---
