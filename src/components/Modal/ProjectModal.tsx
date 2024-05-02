import { Modal, Form, Input, Button } from 'antd';
import React, { useState } from 'react';

interface ProjectModalProps {
  project: any;
  onUpdateProject: (updatedProject: any) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onUpdateProject,
}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [form] = Form.useForm();

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      const updatedProject = { ...project, ...values };
      onUpdateProject(updatedProject);
    });
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Edit</button>
      <Modal
        title="Title"
        open={open}
        onOk={handleUpdate}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form form={form} initialValues={project}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please enter the project name' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="service" label="Service">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProjectModal;
