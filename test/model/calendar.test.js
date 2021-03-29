const Calendar = require("../../src/model/calendar");
describe("Calendar", () => {
  it("should check date is valid", () => {
    const calendar = new Calendar("20210101");
    expect(calendar.validate("6666")).toBe(false);
    expect(calendar.validate("0011")).toBe(false);
    expect(calendar.validate("0101")).toBe(true);
  });

  it("should check date is in next 5 event date", () => {
    const calendar = new Calendar("20201231");
    expect(calendar.validate("1231")).toBe(true);
    expect(calendar.validate("0101")).toBe(true);
    expect(calendar.validate("0103")).toBe(true);
    expect(calendar.validate("0105")).toBe(true);
    expect(calendar.validate("0107")).toBe(true);
    expect(calendar.validate("0109")).toBe(false);
    expect(calendar.validate("0111")).toBe(false);
  });
});
