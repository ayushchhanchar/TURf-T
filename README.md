# TURf-T 🏟️

TURf-T is a full-stack web application designed to make turf booking easier, faster, and more efficient. Users can find available turfs in their city, view details, and book slots online. It's built with a modern tech stack using React for the frontend and Node.js/Express with MongoDB for the backend.

## 🌐 Live Demo

Coming soon...

---

## 📸 Screenshots

<!-- Uncomment and update once available -->
<!--
![Homepage]()
![Booking Page](screenshots/booking.png)
-->

---

## 🚀 Features

- 🗺️ Browse turfs based on location
- 🕒 View available time slots and book instantly
- 👤 User authentication and profile management
- 📅 Booking history and reminders
- 📱 Responsive UI with mobile-friendly design
- 🔒 Secured login system using JWT

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS or Bootstrap (confirm based on code)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for Authentication
- Multer (if image uploads included)

---

## 📂 Project Structure

TURf-T/
├── client/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── ...
├── server/ # Node.js Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── index.js
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

```bash
git clone https://github.com/ayushchhanchar/TURf-T.git
cd TURf-T
Backend Setup
bash
Copy
Edit
cd server
npm install
# Create a .env file and add MongoDB URI and JWT_SECRET



npm start
Frontend Setup
bash
Copy
Edit
cd client
npm install
npm start



📌 Environment Variables
Create a .env file in the server/ directory with the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
📈 Future Enhancements
Online payment integration (Razorpay or Stripe)

Turf owner dashboard to manage slots

Notifications via Email/SMS

Admin panel for managing users and turfs

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

🧑 Author
Ayush Chhanchar
📧 ayushchhanchar@gmail.com
🔗 LinkedIn
