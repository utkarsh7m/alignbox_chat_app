# Alignbox - Real-Time Chat Application

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

A fully functional, real-time chat application built for the Alignbox assignment. This project demonstrates a full-stack implementation with a focus on clean code, responsive design, and a polished user experience.

---

## Key Features

-   📱 **Fully Responsive:** A seamless experience on both desktop and mobile devices.
-   🔐 **User Login:** A simple session-based login to set a display name.
-   🔙 **Clean Navigation:** A functional back button to return to the login screen.
-   🕵️ **Anonymous Mode:** Users can toggle an anonymous mode with a dynamically styled button to hide their name.
-   🔔 **Live Notifications:** A sleek, animated notification bar provides feedback to the user.
-   ⚡ **Real-Time Messaging:** Instant message delivery using WebSockets via Socket.IO.
-   📜 **Persistent Chat History:** Messages are saved and loaded from a MySQL database, ensuring no data is lost.

---

## Tech Stack

-   **Frontend:** React.js, Socket.io-client, Axios
-   **Backend:** Node.js, Express.js, Socket.IO
-   **Database:** MySQL
-   **Environment Management:** `dotenv`

---

## How to Run Locally

### Prerequisites

-   Node.js (v18 or higher)
-   MySQL Server

### Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd <your-repo-folder>
    ```

2.  **Setup Backend:**
    ```sh
    cd server
    npm install
    ```
    Create a `.env` file by copying `.env.example` and add your MySQL credentials.
    ```sh
    npm start
    ```

3.  **Setup Frontend:**
    In a new terminal:
    ```sh
    cd frontend
    npm install
    npm start
    ```

---

## Future Scope

Here are a few features I've planned to enhance the application further:

-   **Admin & Moderation Tools:**
    -   Implement an admin role that has the ability to view the real username of users posting in anonymous mode. This is crucial for moderation and ensuring a safe chat environment.

-   **Private "Whisper" Messages:**
    -   Allow a user to select one or more specific people in the group chat and send a "whispered" message. This message would be hidden from everyone else, enabling semi-private conversations within the main group channel.

-   **Live Typing Indicators:**
    -   Add a "user is typing..." indicator to make the conversation feel more alive and interactive.