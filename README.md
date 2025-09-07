# 🗨️ Mini Chat App

A simple real-time chat application built with **Node.js, Express, and Socket.IO**.  
This app allows multiple users to chat in real-time, with **message sounds**, **mute/unmute option**, and a **6-second delay for received messages** (just for demonstration).

---

## 🚀 Features

- Real-time messaging with **Socket.IO**  
- **Send/Receive notification sounds** (custom `send.mp3` and `receive.mp3`)  
- **Mute/Unmute button** for controlling sounds  
- **6-second message delay** to simulate slow delivery or network lag  
- Lightweight and beginner-friendly code structure  

---

## 📂 Project Structure

chat-app/
│
├── audio/ # Sound files (send.mp3, receive.mp3)
│ ├── send.mp3
│ └── receive.mp3
│
├── index.html # Frontend (UI + socket client code)
├── server.js # Backend (Express + Socket.IO server)
└── README.md # Project documentation



---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
Install dependencies

npm install express socket.io
Run the server

bash
Copy code
node server.js
Open the app in your browser
link:
http://localhost:5000
🎧 How It Works
When you send a message, you hear the send sound.

When someone else sends a message, you hear the receive sound (after 6 seconds delay).

Use the Mute button if you don’t want notification sounds.

🔮 Future Improvements
Add private rooms / groups

Store chat history with a database (MongoDB or MySQL)

Add user authentication (login/signup)

Deploy to Heroku or Vercel

📜 License
This project is open-source and available under the MIT License.
