class Event {
  constructor(date, hosts) {
    this.date = date;
    this.hosts = hosts;
  }

  toString() {
    return this.date + " " + this.hostsString();
  }

  hostsString() {
    return this.hosts.join(", ");
  }
}

module.exports = Event;
