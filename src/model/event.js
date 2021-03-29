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
    if (this.hosts.includes(name)) {
      return false;
    }

    this.hosts.push(name);
    return true;
  }
}

module.exports = Event;
