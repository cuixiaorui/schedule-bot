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
      return true;
    }

    return false;
  }

  travelTo(calendar) {
    const eventDates = calendar.getComingEventDates(5);
    this.removeOutdatedEvents(eventDates);
    this.addComingEvents(eventDates);
  }

  removeOutdatedEvents(eventDates) {
    this.events = this.events.filter((e) => eventDates.includes(e.date));
  }

  addComingEvents(eventDates) {
    eventDates.forEach((date) => {
      if (!this.events.find((e) => e.date === date))
        this.events.push(new Event(date, []));
    });
  }
}

module.exports = Schedule;
