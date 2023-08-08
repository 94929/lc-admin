import ImageUploader from "@/app/components/Uploader/ImageUploader";
import Button from "@/app/components/Button";
import { Form, Select } from "antd";
import Input from "@/app/components/Input";
import TextArea from "@/app/components/Input/TextArea";
import { Fragment } from "react";
import { Typography } from "antd";

const { Title } = Typography;
interface INotificationSendComponent {
  onSubmit: (data: any) => void;
}

function NotificationSendComponent({ onSubmit }: INotificationSendComponent) {
  const [form] = Form.useForm();

  const onClickSend = () => {
    form.submit();
  };

  const onFinish = (values: any) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "'${name}' is required!",
  };

  const onSuccessUpload = (url: string) => {
    form.setFieldValue("file_url", url);
  };

  return (
    <Fragment>
      <div className="container">
        <Title level={3}>Notification Send</Title>

        <Form
          initialValues={{
            type: "typeA",
          }}
          validateMessages={validateMessages}
          form={form}
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="flex h-full mb-[50px]">
            <div className="w-[30%] border-r p-3 mr-3">
              <Form.Item label="Image" name="image">
                <ImageUploader height="400px" onSuccess={onSuccessUpload} />
              </Form.Item>
            </div>

            <div className="w-[70%]">
              <Form.Item
                label="이미지주소"
                name="file_url"
                required
                rules={[{ required: true }]}
              >
                <Input disabled />
              </Form.Item>
              <Form.Item
                label="제목"
                name="title"
                required
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="부제목"
                name="sub_title"
                required
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="컨텐츠"
                name="contents"
                required
                rules={[{ required: true }]}
              >
                <TextArea />
              </Form.Item>
              <Form.Item
                label="타입"
                name="type"
                required
                rules={[{ required: true }]}
              >
                <Select>
                  <Select.Option value="typeA">타입 A</Select.Option>
                  <Select.Option value="typeB">타입 B</Select.Option>
                  <Select.Option value="typeC">타입 C</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>

          <div className="flex-center">
            <Button
              className="w-[300px]"
              size="large"
              type="primary"
              onClick={onClickSend}
            >
              Send
            </Button>
          </div>
        </Form>
      </div>
    </Fragment>
  );
}

export default NotificationSendComponent;
