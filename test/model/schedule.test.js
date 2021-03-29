const Schedule = require("../../src/model/schedule");

describe("Schedule", () => {
  it("should print as string", () => {
    const schedule = new Schedule();
    expect(schedule.toString()).toBe("#排期接龙\n");
  });

  it("should book with date and user", () => {
    const schedule = new Schedule();
    schedule.book("0329", "Seaborn");
    expect(schedule.toString()).toBe(`#排期接龙
0329 Seaborn`);
    schedule.book("0329", "Diven");
    expect(schedule.toString()).toBe(`#排期接龙
0329 Seaborn, Diven`);
  });
});
