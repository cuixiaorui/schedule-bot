const Schedule = require("./model/schedule");

class Handler {
  constructor() {
    this.schedule = new Schedule();
  }

  async handle(message) {
    const text = message.text();
    if (text === "排期") {
      await message.say(this.schedule.toString());
    } else if (text.startsWith("#排期接龙")) {
      this.schedule.update(text);
    }
  }
}

module.exports = Handler;
