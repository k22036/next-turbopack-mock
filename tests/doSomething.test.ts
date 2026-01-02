import { describe, expect, test } from "bun:test";
import { doSomething } from "@/lib/doSomething";

describe("doSomething", () => {
  test("should return expected result", () => {
    const result = doSomething();
    expect(result).toBe("Result: Fetch from API");
  });
});
