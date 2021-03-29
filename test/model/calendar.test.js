const Calender = require("../../src/model/calender");
describe("Calender", () => {
  it("should check date is valid", () => {
    const calender = new Calender("20210101");
    expect(calender.validate("6666")).toBe(false);
    expect(calender.validate("0011")).toBe(false);
    expect(calender.validate("0101")).toBe(true);
  });

  it("should check date is in next 5 event date", () => {
    const calender = new Calender("20210101");
    expect(calender.validate("0101")).toBe(true);
    expect(calender.validate("0103")).toBe(true);
    expect(calender.validate("0105")).toBe(true);
    expect(calender.validate("0107")).toBe(true);
    expect(calender.validate("0109")).toBe(true);
    expect(calender.validate("0111")).toBe(false);
  });
});
