'use client';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Topbar from './Topbar';
import Link from 'next/link';
import { FaTasks } from 'react-icons/fa';
import { AiOutlineAlert } from 'react-icons/ai';

const { Header, Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="max-md:hidden"
      >
        <h2 className="text-3xl text-center font-bold my-4 border-b-2 pb-3">
          PMS
        </h2>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          className="px-2 h-[calc(100vh-70px)]"
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link href={'/projects'}>Projects</Link>,
            },
            {
              key: '2',
              icon: <FaTasks />,
              label: <Link href={'/tasks'}>Tasks</Link>,
            },
          ]}
        />
      </Sider>
      {/* <Topbar collapsed={collapsed} setCollapsed={setCollapsed} /> */}
    </div>
  );
};

export default Sidebar;
