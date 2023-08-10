import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

interface IUseGetEmails {
  page?: number;
  offset?: number;
  keyword?: string;
  type: any;
  from: string;
  to: string;
}

export const useGetEmails = ({
  page = 1,
  offset = 0,
  keyword = "",
  type = "typeA",
  from = "2023-05-01",
  to = "2023-05-31",
}: IUseGetEmails) => {
  const { isLoading, error, data } = useQuery(["emails"], () =>
    axios.get(`/email`, {
      params: {
        page,
        offset,
        keyword,
        type,
        from,
        to,
      },
    }),
  );

  const emails = useMemo(() => {
    if (!data) return null;

    return data.data;
  }, [data]);

  return {
    isLoading,
    error,
    emails,
  };
};
