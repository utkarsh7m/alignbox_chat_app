import express from 'express';
import http from 'http';
import { Server } from "socket.io";
import cors from 'cors';
import db from './database.js';
import initializeSocket from './socket.js';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.get('/messages', async (req, res) => {
    try {
        const [messages] = await db.query("SELECT * FROM messages ORDER BY timestamp ASC");
        res.json(messages);
    } catch (error) {
        console.error("Failed to fetch messages:", error);
        res.status(500).send("Error fetching messages");
    }
});

initializeSocket(io);

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});