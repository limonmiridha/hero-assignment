import create from 'zustand';

interface Task {
  id: string;
  text: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

interface TaskState {
  tasks: Task[];
  moveTask: (id: string, status: 'To Do' | 'In Progress' | 'Done') => void;
  addTask: (newTask: Task) => void;
  editTask: (editedTask: Task) => void;
  completeTask: (taskId: string) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    { id: '1', text: 'Task 1', status: 'To Do' },
    { id: '2', text: 'Task 2', status: 'In Progress' },
    { id: '3', text: 'Task 3', status: 'Done' },
  ],
  moveTask: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      ),
    })),
  addTask: (newTask) =>
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
  editTask: (editedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === editedTask.id ? editedTask : task
      ),
    })),
  completeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Done' } : task
      ),
    })),
}));

export default useTaskStore;
