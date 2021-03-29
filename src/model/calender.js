class Calender {
  validate(date) {
    const mm = date.substr(0, 2);
    const dd = date.substr(2);
    const dateObj = new Date("2021-" + mm + "-" + dd);
    return dateObj.toString() !== "Invalid Date";
  }
}

module.exports = Calender;
