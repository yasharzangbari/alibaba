import { describe, it, expect, vi } from "vitest";
import { requestHandler } from "~lib/api/requestFactory";
import { endpoints } from "./endpoints";
import data from "../../db.json";

const mockAPI = {
  request: vi.fn(),
};

vi.mock("~lib/api/API", () => ({
  API: mockAPI,
}));

describe("requestHandler", () => {
  it("should call API.request with the provided request config and return data", async () => {
    const mockResponse = data;
    mockAPI.request.mockResolvedValue(mockResponse);

    const result = await requestHandler(endpoints.getHotels);

    expect(result).toStrictEqual(mockResponse.data);
  });
});
