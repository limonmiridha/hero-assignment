import React from 'react';
import { Form, Input, Modal, Select } from 'antd';
import { Task, TeamMember } from '../../types/tasks';

interface TaskDetailModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onSave: (editedTask: Task) => void;
  teamMembers: TeamMember[];
}

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  isOpen,
  onClose,
  onSave,
  teamMembers,
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave({ ...task, ...values });
      onClose();
    });
  };

  if (!isOpen) return null;

  return (
    <Modal title="Title" visible={isOpen} onOk={handleSave} onCancel={onClose}>
      <Form form={form} initialValues={task}>
        <Form.Item name="name" label="Task Name">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="deadline" label="Deadline">
          <Input type="date" />
        </Form.Item>
        <Form.Item name="assignedMemberId" label="Assigned Member">
          <Select>
            <Select.Option value="">Unassigned</Select.Option>
            {teamMembers.map((member) => (
              <Select.Option key={member.id} value={member.id}>
                {member.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskDetailModal;
