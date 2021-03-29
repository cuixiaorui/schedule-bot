class Handler {
  constructor() {
    this.schedule = "";
  }
  async handle(message) {
    const text = message.text();
    if (text === "排期") {
      await message.say(this.schedule);
    } else if (text.startsWith("#排期接龙")) {
      this.schedule = text;
    }
  }
}

module.exports = Handler;
