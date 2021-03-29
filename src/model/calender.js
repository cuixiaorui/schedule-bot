class Calender {
  constructor(today) {
    this.yyyy = today.substr(0, 4);
    this.mm = today.substr(4, 6);
    this.dd = today.substr(6);
  }

  validate(date) {
    if (this.isFormatError(date)) {
      return false;
    }

    return this.isInNext5EventDates(date);
  }

  isInNext5EventDates(date) {
    return this.getNext5EventDates().includes(date);
  }

  getNext5EventDates() {
    return ["0101", "0103", "0105", "0107", "0109"];
  }

  isFormatError(date) {
    const mm = date.substr(0, 2);
    const dd = date.substr(2);
    const dateObj = new Date("2021-" + mm + "-" + dd);
    return dateObj.toString() === "Invalid Date";
  }
}

module.exports = Calender;
