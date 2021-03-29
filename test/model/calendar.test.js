const Calender = require("../../src/model/calender");
describe("Calender", () => {
  it("should check date is valid", () => {
    const calender = new Calender();
    expect(calender.validate("6666")).toBe(false);
    expect(calender.validate("0011")).toBe(false);
    expect(calender.validate("1231")).toBe(true);
  });
});
