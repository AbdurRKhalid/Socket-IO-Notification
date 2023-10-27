import { Server } from "socket.io";

let onlineUsers = [];

const addNewUser = (username, socketId) => {
    !onlineUsers.some((user) => user.username === username) && onlineUsers.push({ username, socketId });
}

const deleteUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
}

const getUser = (username) => {
    return onlineUsers.find((user) => user.username === username);
}

const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {

    socket.on("newUser", (username) => {
        addNewUser(username, socket.id);
    });
    socket.on("disconnet", () => {
        deleteUser(socket.id);
    })
});

io.listen(5000);