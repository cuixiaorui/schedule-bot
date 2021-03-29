const Schedule = require("./model/schedule");
const Calendar = require("./model/calendar");

class Handler {
  constructor() {
    this.schedule = new Schedule(this.nowCalendar());
  }

  nowCalendar() {
    const now = new Date();
    now.setHours(now.getHours() + 8); // UTC+8 for China TimeZone
    const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    return new Calendar(today);
  }

  async handle(message) {
    this.schedule.travelTo(this.nowCalendar());

    const text = message.text();
    if (text === "排期") {
      await message.say(this.schedule.toString());
    } else if (text.match(/^\d+$/)) {
      const successfully = this.schedule.book(text, message.from().name());
      if (successfully) await message.say(this.schedule.toString());
    }
  }
}

module.exports = Handler;
