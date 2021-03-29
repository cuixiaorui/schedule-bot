const Event = require("../../src/model/event");

describe("Event", () => {
  it("should not append same host", () => {
    const event = new Event("0401", []);
    const result1 = event.appendHost("Seaborn");
    expect(result1).toBe(true);
    const result2 = event.appendHost("Seaborn");
    expect(result2).toBe(false);
  });
});
