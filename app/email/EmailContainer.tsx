import EmailComponent from "@/app/email/EmailComponent";
import { useGetEmails } from "@/app/api/email/useGetEmails";

interface IEmailContainer {}

function EmailContainer({}: IEmailContainer) {
  const { emails, isLoading, error } = useGetEmails({});

  if (isLoading) {
    // 로딩 중 처리
  }

  if (error) {
    // 네트워크 요청 실패시 처리
  }

  return (
    <>
      <EmailComponent emails={emails || []} />
    </>
  );
}

export default EmailContainer;
