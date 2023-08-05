import ImageUploader from "@/app/components/Uploader/ImageUploader";
import Button from "@/app/components/Button";
import { Form } from "antd";
import Input from "@/app/components/Input";
import TextArea from "@/app/components/Input/TextArea";

interface INotificationSendComponent {
  onSubmit: (data: any) => void;
}

function NotificationSendComponent({ onSubmit }: INotificationSendComponent) {
  return (
    <Form layout="vertical">
      <div className="container">
        <div className="flex h-full">
          <div className="w-[30%] border-r p-3 mr-3">
            <Form.Item label="Image" name="image">
              <ImageUploader />
            </Form.Item>
          </div>

          <div className="w-[70%]">
            <Form.Item label="File Url" name="fileUrl" required>
              <Input />
            </Form.Item>
            <Form.Item label="File Url" name="fileUrl" required>
              <Input />
            </Form.Item>
            <Form.Item label="File Url" name="fileUrl" required>
              <TextArea />
            </Form.Item>
            <Form.Item label="File Url" name="fileUrl" required>
              <TextArea />
            </Form.Item>
          </div>
        </div>

        <div className="flex-center">
          <Button
            className="w-[300px]"
            size="large"
            type="primary"
            onClick={onSubmit}
          >
            Send
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default NotificationSendComponent;
