'use client';
import React, { useEffect, useState } from 'react';
import { Task, TeamMember, Activity } from '../../../types/tasks';

import AddTaskModal from '@/components/Modal/AddTaskModal';

interface ProjectDetailsProps {
  project: {
    id: string;
    name: string;
    tasks: Task[];
    team: TeamMember[];
    activities: Activity[];
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const handleAddTask = (
    taskName: string,
    taskStatus: 'To Do' | 'In Progress' | 'Done',
    assignedMember: string
  ) => {
    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      status: taskStatus,
      assignedMember: assignedMember,
    };
    setTasks([...tasks, newTask] as any);
  };

  useEffect(() => {
    if (project) {
      setTasks(project.tasks);
      setTeamMembers(project.team);
      setActivities(project.activities);
    }
  }, [project]);

  return (
    <div className="border m-2 md:m-20 p-3 md:p-8 rounded-md shadow">
      <div className=" justify-betweens">
        <h1 className="text-xl md:text-3xl font-semibold">{project?.name}</h1>
        <button
          onClick={() => setShowAddTaskModal(true)}
          className="max-md:text-sm border hover:bg-blue-600 hover:text-white shadow transition-all p-2 rounded"
        >
          Add New Task
        </button>
      </div>
      <div className="md:flex gap-8">
        <div className="border p-4 my-4 w-full">
          <h2 className="text-sm md:text-lg font-semibold">Tasks</h2>
          {tasks.map((task) => (
            <div key={task.id} className="my-3 max-md:text-xs">
              {task.name} - {task.status} - {task.assignedMember}
            </div>
          ))}
        </div>
        <div className="border p-4 my-4 w-full">
          <h2 className="text-sm md:text-lg font-semibold">Team Members</h2>
          {teamMembers.map((member) => (
            <div key={member.id} className="my-3 max-md:text-xs">
              {member.name} - {member.role}
            </div>
          ))}
        </div>
      </div>
      <div className="border p-4 my-4">
        <h2 className="text-sm md:text-lg font-semibold">Recent Activities</h2>
        {activities.map((activity) => (
          <div key={activity.id} className="my-3 max-md:text-xs">
            {activity.description} - {new Date(activity.date).toLocaleString()}
          </div>
        ))}
      </div>
      <AddTaskModal
        isOpen={showAddTaskModal}
        onClose={() => setShowAddTaskModal(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default ProjectDetails;
