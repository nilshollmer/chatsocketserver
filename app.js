let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

io.origins(['https://me-angular.nilshollmer.me:443']);

io.on("connection", socket => {
    console.log("User connected");

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });

    socket.on("message", message => {
        console.log("Message received: " + message);
        io.emit("message", { type: "new-message", text: message });
    });
});


server.listen(3000, () => {
    console.log("Server listening to port 3000");
});
