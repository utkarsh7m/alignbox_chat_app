import db from './database.js';

const initializeSocket = (io) => {
    io.on('connection', (socket) => {
        console.log(`User Connected: ${socket.id}`);

        socket.on('sendMessage', async (data) => {
            const { sender_name, message_text, is_anonymous } = data;
            const query = 'INSERT INTO messages (sender_name, message_text, is_anonymous) VALUES (?, ?, ?)';

            try {
                const [result] = await db.query(query, [sender_name, message_text, is_anonymous]);
                const insertId = result.insertId;

                const [newMessage] = await db.query('SELECT * FROM messages WHERE id = ?', [insertId]);
                
                io.emit('newMessage', newMessage[0]);
            } catch (error) {
                console.error("Failed to save or broadcast message:", error);
            }
        });

        socket.on('disconnect', () => {
            console.log(`User Disconnected: ${socket.id}`);
        });
    });
};

export default initializeSocket;