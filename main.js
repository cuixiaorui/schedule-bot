const { Wechaty } = require("wechaty");
const Handler = require("./handler");

const handler = new Handler();

Wechaty.instance() // Singleton
  .on("scan", (qrcode, status) =>
    console.log(
      `Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(
        qrcode
      )}`
    )
  )
  .on("login", (user) => console.log(`User ${user} logined`))
  .on("message", async (message) => {
    const room = message.room();
    if (room) {
      const topic = await room.topic();
      if (topic === "软件匠艺结对直播主播群") await handler.handle(message);
    }
  })
  .start();
