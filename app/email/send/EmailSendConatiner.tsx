import { Fragment } from "react";
import { message } from "antd";
import EmailSendComponent from "@/app/email/send/EmailSendComponent";

function EmailSendContainer() {
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = (data: any) => {
    try {
      // fetch 비동기 처리
      console.log("@@submit data", data);
      onSuccess();
    } catch (err) {
      onFailed(err);
    }
  };

  const onSuccess = () => {
    messageApi.success("보내기 완료~");
  };

  const onFailed = (err: any) => {
    console.error("@@err", err);
  };

  return (
    <Fragment>
      {contextHolder}
      <EmailSendComponent onSubmit={onSubmit} />
    </Fragment>
  );
}

export default EmailSendContainer;
