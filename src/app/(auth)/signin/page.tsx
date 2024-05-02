'use client';
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('form value: ', values);
    toast.success('Login Successful, Values printed on console');
    form.resetFields();
    router.push('/projects');
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <Form
        form={form}
        name="normal_login"
        className="w-full shadow-md rounded-md max-w-lg mx-auto p-5"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="" />}
            placeholder="Username"
            className="py-2"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className="py-2"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between ">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className=" underline " href="">
              Forgot password?
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{' '}
          Or{' '}
          <Link href="" className="underline">
            register now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
