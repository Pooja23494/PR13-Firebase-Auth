# 🔐 Firebase Authentication (React + Vite)

This project is a **Firebase Authentication system** built using **React (Vite)**. It includes user authentication with Email/Password and Google Sign-In, along with Firebase Hosting deployment.

---

## 🔗 Live Demo

👉 https://fir-auth-93684.firebaseapp.com/

---

## 🚀 Features

✅ Sign Up with Email & Password
✅ Login with Email & Password
✅ Google Sign-In Authentication
✅ User Logout (Sign Out)
✅ Real-time Auth State Handling
✅ Deployed with Firebase Hosting

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🔥 Firebase Authentication
* 🌐 Firebase Hosting
* 🎨 Bootstrap 

---

## 📂 Project Structure

```bash
PR13-Firebase-Auth/
│── public/
│── src/
│   ├── components/
│   ├── firebase.js
│   ├── App.jsx
│   └── main.jsx
│── .firebaserc
│── firebase.json
│── package.json
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pooja23494/PR13-Firebase-Auth.git
cd PR13-Firebase-Auth
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Development Server

```bash
npm run dev
```

## 🔥 Firebase Setup

1. Go to Firebase Console

2. Create a project

3. Enable Authentication:

   * Email/Password
   * Google Sign-In

4. Create `src/firebase.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
---

## 🌐 Firebase Hosting (Vite Build)

### Build Project

```bash
npm run build
```

---

### Firebase Init

```bash
firebase login
firebase init
```

👉 Select:

* Hosting
* Choose existing project
* Set **dist** as public directory
* Configure as **Single Page App (SPA): Yes**

---

### Deploy

```bash
firebase deploy
```

---

## 📸 Screenshots

* Signup Page
![alt text](<Screenshot 2026-04-13 195457.png>)

* Login Page
![alt text](<Screenshot 2026-04-13 195443.png>)

* Google Sign-In
![alt text](<Screenshot 2026-04-13 195546.png>)

* Dashboard
![alt text](<Screenshot 2026-04-13 195611.png>)

---

## 📌 Author

**Pooja Patel**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
