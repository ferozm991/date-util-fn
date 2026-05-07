import { generateDateRange, timeAgo } from "date-util-fn";

describe("generateDateRange", () => {
  test("returns each calendar day from start through end inclusive", () => {
    const end = new Date("2025-05-08");
    const start = new Date("2025-05-01");
    const expectedDates = [
      new Date("2025-05-01"),
      new Date("2025-05-02"),
      new Date("2025-05-03"),
      new Date("2025-05-04"),
      new Date("2025-05-05"),
      new Date("2025-05-06"),
      new Date("2025-05-07"),
      new Date("2025-05-08"),
    ];
    const result = generateDateRange(start, end);
    expect(result).toEqual(expectedDates);
    expect(result.length).toBe(8);
  });
});

describe("timeAgo", () => {
  const now = new Date("2025-05-08T12:00:00.000Z");

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(now);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("returns just now when under one second", () => {
    const date = new Date("2025-05-08T11:59:59.500Z");
    expect(timeAgo(date)).toBe("just now");
  });

  test("returns plural seconds", () => {
    const date = new Date("2025-05-08T11:59:30.000Z");
    expect(timeAgo(date)).toBe("30 seconds ago");
  });

  test("returns singular second", () => {
    const date = new Date("2025-05-08T11:59:59.000Z");
    expect(timeAgo(date)).toBe("1 second ago");
  });

  test("returns singular minute", () => {
    const date = new Date("2025-05-08T11:59:00.000Z");
    expect(timeAgo(date)).toBe("1 minute ago");
  });

  test("returns plural minutes", () => {
    const date = new Date("2025-05-08T11:58:00.000Z");
    expect(timeAgo(date)).toBe("2 minutes ago");
  });

  test("returns singular hour", () => {
    const date = new Date("2025-05-08T11:00:00.000Z");
    expect(timeAgo(date)).toBe("1 hour ago");
  });

  test("returns plural days", () => {
    const date = new Date("2025-05-06T12:00:00.000Z");
    expect(timeAgo(date)).toBe("2 days ago");
  });
});
