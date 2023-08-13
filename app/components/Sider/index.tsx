"use client";

import React, { useEffect, useState } from "react";
import {
  HddOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Logo from "@/app/components/Sider/Logo";
import { useRouter } from "next/navigation";
import { PATH } from "@/app/const/path";
import { usePathname } from "next/dist/client/components/navigation";
const { Sider: AntdSidder } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem({
  label,
  key,
  icon,
  children,
  onClick,
}: {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } as MenuItem;
}

function Sider() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string>(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const onClickLink = (path: string) => {
    return () => {
      router.push(path);
    };
  };

  const openMenuKeyMap = {
    NOTIFICATION_MENU: "NOTIFICATION_MENU",
  };

  const pathAndOpenKeyMap = {
    [PATH.EMAIL]: openMenuKeyMap.NOTIFICATION_MENU,
    [PATH.SEND_EMAIL]: openMenuKeyMap.NOTIFICATION_MENU,
  };

  const items: MenuItem[] = [
    getItem({
      label: "dashboard",
      key: PATH.DASHBOARD,
      icon: <LineChartOutlined />,
      onClick: onClickLink(PATH.DASHBOARD),
    }),
    getItem({
      label: "Admin -> User",
      key: openMenuKeyMap.NOTIFICATION_MENU,
      icon: <HddOutlined />,
      children: [
        getItem({
          label: "E-Mail",
          key: PATH.EMAIL,
          onClick: onClickLink(PATH.EMAIL),
          icon: <PieChartOutlined />,
        }),
        getItem({
          label: "Send E-Mail",
          key: PATH.SEND_EMAIL,
          onClick: onClickLink(PATH.SEND_EMAIL),
          icon: <PieChartOutlined />,
        }),
      ],
    }),
  ];
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdSidder
      theme={"light"}
      className="border-r"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Logo />
      <Menu
        theme="light"
        mode="inline"
        items={items}
        defaultOpenKeys={[pathAndOpenKeyMap[currentPath]]}
        defaultSelectedKeys={[currentPath]}
      />
    </AntdSidder>
  );
}

export default Sider;
