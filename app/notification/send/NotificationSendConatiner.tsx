import NotificationSendComponent from "@/app/notification/send/NotificationSendComponent";
import { useForm } from "react-hook-form";
import { Form, message } from "antd";
import { Fragment } from "react";

function NotificationSendContainer() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.submit();
    messageApi.success("보내기 완료~");
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <NotificationSendComponent onSubmit={onSubmit} />
      </Form>
    </Fragment>
  );
}

export default NotificationSendContainer;
