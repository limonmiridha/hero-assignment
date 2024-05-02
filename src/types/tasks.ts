export interface Task {
  id: string;
  name: string;
  description: string;
  deadline: Date;
  status: 'To Do' | 'In Progress' | 'Done';
  assignedMember: string | null;
  assignedMemberId: string | null;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export interface Activity {
  id: string;
  description: string;
  date: Date;
}
