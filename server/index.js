import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    console.log('Someone has connected to Server!');

    socket.on("disconnet", () => {
        console.log('Someone has disconnected from Server!');
    })
});

io.listen(3000);