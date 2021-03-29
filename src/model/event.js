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

  appendHost(name) {
    this.hosts.push(name);
  }
}

module.exports = Event;
