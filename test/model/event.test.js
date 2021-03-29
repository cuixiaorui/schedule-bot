const Event = require("../../src/model/event");

describe("Event", () => {
  it("should not append same host", () => {
    const event = new Event("0401", []);
    const result1 = event.appendHost("Seaborn");
    expect(result1).toBe(true);
    const result2 = event.appendHost("Seaborn");
    expect(result2).toBe(false);
  });

  it("should not book more than 2 hosts", () => {
    const event = new Event("0401", []);
    expect(event.appendHost("Seaborn")).toBe(true);
    expect(event.appendHost("Diven")).toBe(true);
    expect(event.appendHost("Simon")).toBe(false);
  });
});
