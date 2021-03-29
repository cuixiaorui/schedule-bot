const Event = require("../../src/model/event");

describe("Event", () => {
  it("should cancel when same host", () => {
    const event = new Event("0401", []);
    event.appendHost("Seaborn");
    expect(event.hosts).toContain('Seaborn');
    event.appendHost("Seaborn");
    expect(event.hosts).toEqual([]);
  });

  it("should not book more than 2 hosts", () => {
    const event = new Event("0401", []);
    expect(event.appendHost("Seaborn")).toBe(true);
    expect(event.appendHost("Diven")).toBe(true);
    expect(event.appendHost("Simon")).toBe(false);
  });
});
