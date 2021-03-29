class Calendar {
  constructor(today) {
    this.yyyy = today.slice(0, 4);
    this.mm = today.slice(4, 6);
    this.dd = today.slice(6);
  }

  validate(date) {
    if (this.isFormatError(date)) {
      return false;
    }

    return this.isInComingEventDates(date);
  }

  isInComingEventDates(date, times = 5) {
    return this.getComingEventDates(times).includes(date);
  }

  getComingEventDates(times) {
    const result = this.getNextDayDates(10);
    const isEventDate = strDate => Number(strDate) % 2 !== 0;
    return result.filter(isEventDate).slice(0, times);
  }

  getNextDayDates(days) {
    const result = [];
    const current = new Date(`${this.yyyy}-${this.mm}-${this.dd}`);
    for (let i = 0; i < days; i++) {
      result.push(this.formatStr(`${current.getMonth() + 1}`) + this.formatStr(`${current.getDate()}`));
      current.setDate(current.getDate() + 1);
    }
    return result;
  }

  formatStr(str) {
    return `00${str}`.slice(-2);
  }

  isFormatError(date) {
    const mm = date.substr(0, 2);
    const dd = date.substr(2);
    const dateObj = new Date("2021-" + mm + "-" + dd);
    return dateObj.toString() === "Invalid Date";
  }
}

module.exports = Calendar;
