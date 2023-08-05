import NotificationSendComponent from "@/app/notification/send/NotificationSendComponent";
import { useForm } from "react-hook-form";
import { message } from "antd";
import { Fragment } from "react";

function NotificationSendContainer() {
  const { register, handleSubmit } = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const onSubmit = async (data: any) => {
    messageApi.success("보내기 완료~");
    console.log(data);
  };
  return (
    <Fragment>
      {contextHolder}
      <NotificationSendComponent onSubmit={handleSubmit(onSubmit)} />
    </Fragment>
  );
}

export default NotificationSendContainer;
