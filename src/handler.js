const Schedule = require("./model/schedule");

class Handler {
  constructor() {
    this.schedule = new Schedule();
  }

  async handle(message) {
    const text = message.text();
    if (text === "排期") {
      await message.say(this.schedule.toString());
    } else if (text.match(/^\d{4}$/)) {
      this.schedule.book(text, message.from().name());
      await message.say(this.schedule.toString());
    }
  }
}

module.exports = Handler;
