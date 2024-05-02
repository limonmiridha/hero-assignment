'use client';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { FaTasks } from 'react-icons/fa';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

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
    </div>
  );
};

export default Sidebar;
