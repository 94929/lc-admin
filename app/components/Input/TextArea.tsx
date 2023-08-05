import { Input as AntdInput } from "antd";
import { TextAreaProps } from "antd/es/input";

interface ITextArea extends TextAreaProps {}

function TextArea({ ...rest }: ITextArea) {
  return <AntdInput.TextArea {...rest} />;
}

export default TextArea;
