"use client";

import React from "react";
import Sider from "@/app/components/Sider";
import { Breadcrumb, Layout, theme } from "antd";
import AntdConfigProvider from "@/app/lib/AntdConfigProvider";

const { Header, Content } = Layout;

function MainLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntdConfigProvider>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "16px 16px" }}>
            <div
              style={{
                padding: 24,
                height: "100%",
                overflowY: "auto",
                maxHeight: "calc(100vh - 100px)",
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </AntdConfigProvider>
  );
}

export default MainLayout;
