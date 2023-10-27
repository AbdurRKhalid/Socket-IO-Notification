import { Server } from "socket.io";

let onlineUsers = [];

const addNewUser = (username, socketId) => {
    onlineUsers.push({username, socketId});
}

const deleteUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
}

const getUser = (username) => {
    for(let user of onlineUsers) {
        if(user.username === username) {
            return user;
        }
    }
}

const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {

    console.log("Connection Established!");

    socket.on("newUser", (username) => {
        addNewUser(username, socket.id);
    });
    socket.on("sendNotification", ({senderName, receiverName, type}) => {
        const receiver = getUser(receiverName);
        console.log(receiver);
        io.to(receiver.socketId).emit("getNotification", {
            senderName,
            type
        });
    });
    socket.on("disconnet", () => {
        deleteUser(socket.id);
    })
});

io.listen(5000);