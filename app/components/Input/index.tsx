import { Input as AntdInput, InputProps } from "antd";

interface IInput extends InputProps {}

function Input({ ...rest }: IInput) {
  return <AntdInput {...rest} />;
}

export default Input;
