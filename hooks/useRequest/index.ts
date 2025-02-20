import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { requestHandler } from "~lib/api/requestFactory";

export const useRequest = <TData>(
  keys: Array<string>,
  request: AxiosRequestConfig,
  refetch?: boolean
): UseQueryResult<TData> => {
  return useQuery({
    queryKey: keys,
    queryFn: () => requestHandler(request),
    refetchInterval: refetch ? 3000 : undefined,
    initialData: undefined,
  });
};
