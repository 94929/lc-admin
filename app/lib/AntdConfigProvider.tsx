import { ConfigProvider } from "antd";

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F8981D",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdConfigProvider;
