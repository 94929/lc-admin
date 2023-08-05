"use client";

import React, { useEffect, useState } from "react";
import {
  HddOutlined,
  LineChartOutlined,
  PieChartOutlined,
  TeamOutlined,
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
    [PATH.NOTIFICATION]: openMenuKeyMap.NOTIFICATION_MENU,
    [PATH.NOTIFICATION_SEND]: openMenuKeyMap.NOTIFICATION_MENU,
  };

  const items: MenuItem[] = [
    getItem({
      label: "dashboard",
      key: PATH.DASHBOARD,
      icon: <LineChartOutlined />,
      onClick: onClickLink(PATH.DASHBOARD),
    }),
    getItem({
      label: "DB",
      key: openMenuKeyMap.NOTIFICATION_MENU,
      icon: <HddOutlined />,
      children: [
        getItem({
          label: "Noti",
          key: PATH.NOTIFICATION,
          onClick: onClickLink(PATH.NOTIFICATION),
          icon: <PieChartOutlined />,
        }),
        getItem({
          label: "Noti-send",
          key: PATH.NOTIFICATION_SEND,
          onClick: onClickLink(PATH.NOTIFICATION_SEND),
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
