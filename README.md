# MERN Notes App

A full-stack notes application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, view, and manage notes with a beautiful UI and theme switching support using Tailwind CSS and daisyUI.

## Features
- Create, view, and manage notes
- Responsive and modern UI
- Multiple theme support (light, dark, forest, sunset, etc.)
- Rate limiting for API requests
- Built with Vite for fast frontend development

## Tech Stack
- **Frontend:** React, Tailwind CSS, daisyUI, Vite
- **Backend:** Node.js, Express, MongoDB

---

## Project Structure

```
mern-notes-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── public/
│   ├── tailwind.config.js
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

---

## Installation

### 1. Clone the Repository
```bash
git clone <https://github.com/K-satyabrat/MERN_notes_-app.git>
cd mern-notes-app
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Set Up Environment Variables
- Create a `.env` file in the `backend` folder with your MongoDB URI and any other required variables.

Example `.env`:
```
MONGODB_URI=your_mongodb_connection_string
PORT=8000
```

### 4. Start the Backend Server
```bash
npm run dev
# or
npm start
```

### 5. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 6. Start the Frontend Development Server
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or as shown in your terminal), and the backend API at `http://localhost:8000` by default.




## Customization
- You can add or remove themes by editing `daisyui.themes` in `frontend/tailwind.config.js` and updating the theme list in `frontend/src/components/Navbar.jsx`.

---
