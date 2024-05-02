import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';

import Link from 'next/link';
import { IoIosLogIn } from 'react-icons/io';

const Topbar = () => {
  theme.useToken();
  return (
    // <Layout>
    <Header
      style={{ paddingRight: 20, background: '#00151105' }}
      className="flexs ps-3"
    >
      <div className="md:hidden flexs gap-3">
        <h2 className="text-2xl font-semibold">PMS</h2>
        {[
          { id: 1, title: 'Projects' },
          { id: 2, title: 'Tasks' },
        ].map((link) => (
          <Link
            key={link.id}
            href={link.title.toLowerCase()}
            className=" font-medium w-min ms-auto flex items-center justify-end gap-2"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Link
        href={'/signin'}
        className=" font-medium w-min ms-auto flex items-center justify-end gap-2"
      >
        <IoIosLogIn className="text-2xl" />
        Login
      </Link>
    </Header>
    // </Layout>
  );
};

export default Topbar;
