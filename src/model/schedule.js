const Event = require("./event");
class Schedule {
  constructor(calendar) {
    const commingEventDates = calendar.getComingEventDates(5);
    this.events = commingEventDates.map((date) => new Event(date, []));
  }

  toString() {
    return this.title() + this.eventsString();
  }

  eventsString() {
    return this.events.map((e) => e.toString()).join("\n");
  }

  title() {
    return "#排期接龙\n";
  }

  book(date, name) {
    const event = this.events.find((e) => e.date === date);
    if (event) {
      event.appendHost(name);
    } else {
      this.events.push(new Event(date, [name]));
    }
  }
}

module.exports = Schedule;
