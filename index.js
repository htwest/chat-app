const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const helmet = require("helmet");

const app = express();
const server = require("http").createServer(app);

// ******************
//     MIDDLEWARE
// ******************

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

// ******************
//     ROUTES
// ******************

app.get("/", (req, res) => {
  res.json("hi");
});

app.post("/signup", (req, res) => {
  res.send("recieved");
});

app.post("/login", (req, res) => {
  res.send("recieved");
});

// ******************
//     SOCKETS
// ******************

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
