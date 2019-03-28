import * as express from "express";
import * as http from "http";
import * as WebSocket from "ws";

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  ws.on("message", message => {
    console.log("received %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  ws.send(`Hi, I'm a motherfucking websocket server`);
});

server.listen(process.env.PORT || 8999, () => {
  console.log(`started server on port ${server.address().port}`);
});

server.listen(80, (req, res) => {
  res.send("GTFO");
});
