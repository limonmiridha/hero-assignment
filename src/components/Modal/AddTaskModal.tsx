import { Modal, Form, Input, Select, Button } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (
    taskName: string,
    taskStatus: 'To Do' | 'In Progress' | 'Done',
    assignedMember: string
  ) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  isOpen,
  onClose,
  onAddTask,
}) => {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onAddTask(values.taskName, values.taskStatus, values.assignedMember);
      setConfirmLoading(true);
      setTimeout(() => {
        onClose();
        setConfirmLoading(false);
      }, 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <Modal
      title="Title"
      visible={isOpen}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      onCancel={onClose}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="taskName"
          rules={[{ required: true, message: 'Please enter a task name' }]}
        >
          <Input placeholder="Task Name" />
        </Form.Item>
        <Form.Item name="taskStatus" initialValue="To Do">
          <Select>
            <Option value="To Do">To Do</Option>
            <Option value="In Progress">In Progress</Option>
            <Option value="Done">Done</Option>
          </Select>
        </Form.Item>
        <Form.Item name="assignedMember" initialValue="Alice">
          <Select>
            <Option value="Alice">Alice</Option>
            <Option value="Bob">Bob</Option>
            <Option value="Charlie">Charlie</Option>
            <Option value="Dana">Dana</Option>
          </Select>
        </Form.Item>
        {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Task
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
