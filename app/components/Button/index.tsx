import { Button as AntdButton, ButtonProps } from "antd";

interface IButton extends ButtonProps {}

function Button({ ...rest }: IButton) {
  return <AntdButton {...rest} />;
}

export default Button;
