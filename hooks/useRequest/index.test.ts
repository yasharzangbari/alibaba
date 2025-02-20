import { describe, it, expect, vi, Mock } from "vitest";
import { useQuery } from "@tanstack/react-query";
import { useRequest } from "./index";
import { requestHandler } from "~lib/api/requestFactory";
import data from "../../db.json";
import { QUERY_KEYS } from "~constants/queryKeys";

vi.mock("~lib/api/requestFactory", () => ({
  requestHandler: vi.fn(),
}));

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

const MockUseQuery = useQuery as Mock;

describe("useRequest", () => {
  it("should call useQuery with the correct parameters", () => {
    const keys = [QUERY_KEYS.GET_HOTELS];
    const request = { url: "/data", method: "GET" };
    const refetch = true;

    MockUseQuery.mockImplementation(({ queryFn }) => {
      if (queryFn) {
        queryFn();
      }
      return {
        data: data,
        isLoading: false,
        isError: false,
      };
    });

    useRequest(keys, request, refetch);

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: keys,
      queryFn: expect.any(Function),
      refetchInterval: refetch ? 3000 : undefined,
      initialData: undefined,
    });

    expect(requestHandler).toHaveBeenCalledWith(request);
  });

  it("should not refetch if refetch is false", () => {
    const keys = ["testKey"];
    const request = { url: "/test", method: "GET" };
    const refetch = false;

    MockUseQuery.mockImplementation(({ queryFn }) => {
      if (queryFn) {
        queryFn();
      }
      return {
        data: data,
        isLoading: false,
        isError: false,
      };
    });

    useRequest(keys, request, refetch);

    expect(useQuery).toHaveBeenCalledWith({
      queryKey: keys,
      queryFn: expect.any(Function),
      refetchInterval: undefined,
      initialData: undefined,
    });

    expect(requestHandler).toHaveBeenCalledWith(request);
  });
});
