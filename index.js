const express = require("express");
const { Server } = require("socket.io");
const helmet = require("helmet");

const app = express();

const server = require("http").createServer(app);

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hi");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

io.on("connect", (socket) => {});

server.listen(4000, () => {
  console.log("Server listening on Port 4000");
});
