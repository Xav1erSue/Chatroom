const dayjs = require("dayjs");
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 9527 }, () =>
  console.log("websocket server is running at port 9527")
);

server.on("open", () => {
  console.log("server is opened");
});

server.on("close", () => {
  console.log("server is closed");
});

server.on("connection", (ws, req) => {
  const user = `${req.socket.remoteAddress}:${req.socket.remotePort}`;
  console.log(
    `<${dayjs().format("YYYY-M-DD HH:mm:ss")}>: [${user}] is connected.`
  );
  // 发送欢迎信息给客户端
  ws.send(
    JSON.stringify({
      isSystem: true,
      message: `用户<${user}>，进入聊天室请注意文明用语！`,
    })
  );

  ws.on("message", msg => {
    const data = JSON.parse(msg);
    console.log(`received: ${data.message} from ${data.username}`);

    // 广播消息给所有客户端
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });
});
