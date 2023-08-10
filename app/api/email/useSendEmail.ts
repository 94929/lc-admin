import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSendEmail = () => {
  const { mutate, isLoading } = useMutation(
    (data) => axios.post("/email/post", { data }), // mutationFn
  );

  const sendEmail = (data: any) => {
    mutate(data);
  };

  return {
    isLoading,
    sendEmail,
  };
};
