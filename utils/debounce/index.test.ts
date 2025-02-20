import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { debounce } from "./index";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should call the function after the specified wait time", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();

    vi.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should cancel the previous call if debounced function is called again within the wait time", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();

    vi.advanceTimersByTime(500);

    debouncedFn();

    vi.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should pass the correct arguments to the debounced function", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn("arg1", "arg2");

    vi.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledWith("arg1", "arg2");
  });

  it("should not call the function if the wait time has not passed", () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();

    vi.advanceTimersByTime(500);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
