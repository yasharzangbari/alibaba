import { describe, it, expect } from "vitest";
import { toPersianNumber } from "./index";

describe("toPersianNumber", () => {
  it("should convert English numbers to Persian numbers (number input)", () => {
    const input = 12345;
    const expectedOutput = "۱۲۳۴۵";
    expect(toPersianNumber(input)).toBe(expectedOutput);
  });

  it("should convert English numbers to Persian numbers (string input)", () => {
    const input = "12345";
    const expectedOutput = "۱۲۳۴۵";
    expect(toPersianNumber(input)).toBe(expectedOutput);
  });

  it("should return undefined if the input is undefined", () => {
    const input = undefined;
    expect(toPersianNumber(input)).toBeUndefined();
  });

  it("should handle mixed input (numbers and non-numbers)", () => {
    const input = "12a34b56";
    const expectedOutput = "۱۲a۳۴b۵۶";
    expect(toPersianNumber(input)).toBe(expectedOutput);
  });

  it("should handle empty string input", () => {
    const input = "";
    const expectedOutput = "";
    expect(toPersianNumber(input)).toBe(expectedOutput);
  });

  it("should handle zero input", () => {
    const input = 0;
    const expectedOutput = "۰";
    expect(toPersianNumber(input)).toBe(expectedOutput);
  });
});
