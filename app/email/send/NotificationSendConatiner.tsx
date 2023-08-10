import NotificationSendComponent from "@/app/email/send/NotificationSendComponent";
import { Form, message } from "antd";
import { Fragment } from "react";

function NotificationSendContainer() {
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
      <NotificationSendComponent onSubmit={onSubmit} />
    </Fragment>
  );
}

export default NotificationSendContainer;
