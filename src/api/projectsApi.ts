export const fetchProjects = async () => {
  return [
    {
      id: 1,
      name: 'Jar of Bread',
      service: 'Development',
      tasks: [
        {
          id: 1,
          name: 'Design Wireframes',
          status: 'Completed',
          assignedMember: 'Bob',
        },
        {
          id: 2,
          name: 'Develop API',
          status: 'In Progress',
          assignedMember: 'Alice',
        },
      ],
      team: [
        { id: 3, name: 'Alice', role: 'Frontend Developer' },
        { id: 4, name: 'Bob', role: 'Backend Developer' },
      ],
      activities: [
        { id: 1, description: 'Task 1 Completed', date: '2023-01-01' },
        { id: 2, description: 'Task 2 Started', date: '2023-01-02' },
      ],
    },
    {
      id: 2,
      name: 'Ocean of Pixels',
      service: 'Design',
      tasks: [
        {
          id: 3,
          name: 'Create Logo',
          status: 'Completed',
          assignedMember: 'Charlie',
        },
        {
          id: 4,
          name: 'Set Color Scheme',
          status: 'In Progress',
          assignedMember: 'Dana',
        },
      ],
      team: [
        { id: 3, name: 'Charlie', role: 'Frontend Developer' },
        { id: 4, name: 'Dana', role: 'Backend Developer' },
      ],
      activities: [
        { id: 3, description: 'Logo Completed', date: '2023-02-01' },
        { id: 4, description: 'Color Scheme Initiated', date: '2023-02-02' },
      ],
    },
    {
      id: 3,
      name: 'Code Harmony',
      service: 'Web App',
      tasks: [
        {
          id: 5,
          name: 'Refactor Codebase',
          status: 'Completed',
          assignedMember: 'Frank',
        },
        {
          id: 6,
          name: 'Implement New Features',
          status: 'In Progress',
          assignedMember: 'Eve',
        },
      ],
      team: [
        { id: 5, name: 'Eve', role: 'Problem Solver' },
        { id: 6, name: 'Frank', role: 'Frontend Developer' },
      ],
      activities: [
        { id: 5, description: 'Refactoring Done', date: '2023-03-01' },
        {
          id: 6,
          description: 'Feature Development Started',
          date: '2023-03-02',
        },
      ],
    },
    {
      id: 4,
      name: 'Data Diggers',
      service: 'Data Analysis',
      tasks: [
        {
          id: 7,
          name: 'Analyze Market Trends',
          status: 'Completed',
          assignedMember: 'Grace',
        },
        {
          id: 8,
          name: 'Prepare Report',
          status: 'In Progress',
          assignedMember: 'Henry',
        },
      ],
      team: [
        { id: 7, name: 'Grace', role: 'Junior Analist' },
        { id: 8, name: 'Henry', role: 'Database Manager' },
      ],
      activities: [
        { id: 7, description: 'Market Analysis Completed', date: '2023-04-01' },
        {
          id: 8,
          description: 'Report Preparation Started',
          date: '2023-04-02',
        },
      ],
    },
    {
      id: 5,
      name: 'Creative Constructs',
      service: 'Architecture',
      tasks: [
        {
          id: 9,
          name: 'Draft Initial Designs',
          status: 'Completed',
          assignedMember: 'Jack',
        },
        {
          id: 10,
          name: 'Site Survey',
          status: 'In Progress',
          assignedMember: 'Ivy',
        },
      ],
      team: [
        { id: 9, name: 'Ivy', role: 'Building Dev.' },
        { id: 10, name: 'Jack', role: 'Road Developer' },
      ],
      activities: [
        { id: 9, description: 'Initial Designs Drafted', date: '2023-05-01' },
        { id: 10, description: 'Site Survey Begun', date: '2023-05-02' },
      ],
    },
  ];
};
