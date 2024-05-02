'use client';
import React from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import useTaskStore from '../../store/useTaskStore';
import ProjectModal from '@/components/Modal/ProjectModal';
import { FaPlus } from 'react-icons/fa';
import { Task } from '@/types/tasks';
import TaskDetailModal from '@/components/Modal/TaskDetailModal';
import { Modal } from 'antd';

const TaskUi = () => {
  const { tasks, moveTask, addTask, editTask, completeTask } = useTaskStore();
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);

  const handleAddTask = (newTask: Task) => {
    addTask(newTask as any);
  };

  const handleEditTask = (editedTask: Task) => {
    editTask(editedTask as any);
  };

  const handleCompleteTask = (taskId: string) => {
    completeTask(taskId as any);
  };

  const openTaskDetails = (taskId: string) => {
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task as any);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  const Column = ({ status }: any) => {
    const [, drop] = useDrop(() => ({
      accept: 'task',
      drop: (item: any) => moveTask(item.id, status),
    }));

    return (
      <div ref={drop as any} className="border font-semibold rounded p-3 h-min">
        <div className="bg-blue-600 flex justify-between items-center p-2 rounded-sm">
          <h2 className="text-white">{status}</h2>
          {status === 'To Do' && (
            <FaPlus
              className="cursor-pointer text-white"
              onClick={() => setOpenModal(true)}
            />
          )}
        </div>
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <Task key={task.id} task={task} openTaskDetails={openTaskDetails} />
          ))}
      </div>
    );
  };

  const Task = ({ task }: any) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'task',
      item: { id: task.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag as any}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className="cursor-pointer text-black border rounded p-2 my-2"
        onClick={() => openTaskDetails(task.id)}
      >
        {task.text}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="m-5">
        <div className="grid md:grid-cols-3 gap-5 max-w-3xl">
          {['To Do', 'In Progress', 'Done'].map((status) => (
            <Column key={status} status={status} />
          ))}
        </div>

        {selectedTask && (
          <TaskDetailModal
            task={selectedTask}
            isOpen={openModal}
            onClose={closeTaskDetails}
            onSave={handleEditTask}
            teamMembers={teamMembers}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default TaskUi;

const teamMembers = [
  { id: '1', name: 'John', role: 'Admin' },
  { id: '', name: 'Alice', role: 'Frontend Developer' },
];
