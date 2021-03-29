const Schedule = require("../../src/model/schedule");
const Calendar = require("../../src/model/calendar");

describe("Schedule", () => {
  it("should book with date and user", () => {
    const calendar = new Calendar("2021-1-1");
    const schedule = new Schedule(calendar);
    schedule.book("0329", "Seaborn");
    expect(schedule.toString()).toContain(`#排期接龙`);
    expect(schedule.toString()).toContain(`0329 Seaborn`);
    schedule.book("0329", "Diven");
    expect(schedule.toString()).toContain(`0329 Seaborn, Diven`);
  });

  it("should list 5 coming events", () => {
    const calendar = new Calendar("2021-1-1");
    const schedule = new Schedule(calendar);
    expect(schedule.toString()).toContain("0101");
    expect(schedule.toString()).toContain("0103");
    expect(schedule.toString()).toContain("0105");
    expect(schedule.toString()).toContain("0107");
    expect(schedule.toString()).toContain("0109");
  });
});
