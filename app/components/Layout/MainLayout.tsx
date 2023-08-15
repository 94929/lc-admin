"use client";

import React from "react";
import { Layout, theme } from "antd";
import AntdConfigProvider from "@/app/components/Provider/AntdConfigProvider";
import Header from "@/app/components/Header";
import Sider from "@/app/components/Sider";

const { Content } = Layout;

function MainLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntdConfigProvider>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout>
          <Header />
          <Content style={{ margin: "16px 16px" }}>
            <div
              style={{
                padding: 24,
                height: "100%",
                overflowY: "auto",
                // 나중에 컨텐츠 영역 내부에서만 스크롤 됐으면 싶을 때 주석 풀어뵤세요
                // maxHeight: "calc(100vh - 100px)",
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
