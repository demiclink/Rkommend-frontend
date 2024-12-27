const mockData = {
  student: {
    name: "Dr. Adamu Joshua",
    greeting: "Good morning",
    date: "Tuesday, December 28, 2023",
    email: "dadamujosh99@yahoo.com",
    phonenumber: "+2349012345678",
  },
  educationRecord: [
    {
      id: 1,
      institution: "Oxford University",
      department: "Department of Computer Science",
    },
    {
      id: 2,
      institution: "University of Ilorin",
      department: "Department of Computer Science",
    },
  ],
  requests: {
    availableSlots: 0,
    slotsText: "Buy request slots",
    newRequestText: "Create recommendation request",
    requestsList: [
      {
        id: 1,
        professor: "Prof. Eloisse Motunrayo",
        institution: "Oxford University",
        status: "Completed",
        date: "December 12, 2024",
        message: "Your request has been completed",
      },
      {
        id: 2,
        professor: "Prof. Eloisse Motunrayo",
        institution: "Oxford University",
        status: "Pending",
        date: "December 12, 2024",
        message: "Your request was accepted",
      },
      {
        id: 3,
        professor: "Prof. Eloisse Motunrayo",
        institution: "Oxford University",
        status: "Declined",
        date: "December 10, 2024",
        message: "Your request was rejected",
      },
      {
        id: 4,
        professor: "Prof. Eloisse Motunrayo",
        institution: "Oxford University",
        status: "In Progress",
        date: "December 19, 2024",
        message: "Your request was accepted",
      },
      {
        id: 5,
        professor: "Prof. Eloisse Motunrayo",
        institution: "Oxford University",
        status: "Pending",
        date: "December 13, 2024",
        message: "Your request was rejected",
      },
    ],
  },
  notifications: [
    {
      id: 1,
      date: "December 14, 2024",
      message: "Your request has been completed",
    },
    {
      id: 2,
      date: "December 12, 2024",
      message: "Your request was accepted",
    },
    {
      id: 3,
      date: "December 10, 2024",
      message: "Your request was rejected",
    },
    {
      id: 4,
      date: "December 9, 2024",
      message: "Successfully purchased 10 recommendation requests",
    },
    {
      id: 5,
      date: "December 10, 2024",
      message: "You're out of requests. Purchase now.",
    },
  ],
};

export const fetchMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Simulate API delay
  });
};
