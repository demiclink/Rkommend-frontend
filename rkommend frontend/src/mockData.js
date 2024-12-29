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
      matricNumber: "OXF123456",
      gradYear: 2022,
      transcript: "Oxford_Transcript.pdf",
      about:
        "One of the oldest and most prestigious universities, known for its academic excellence and rigorous computer science program.",
    },
    {
      id: 2,
      institution: "University of Ilorin",
      department: "Department of Computer Science",
      matricNumber: "UIL234567",
      gradYear: 2021,
      transcript: "Ilorin_Transcript.pdf",
      about:
        "A leading institution in Nigeria, renowned for producing top-tier computer science graduates.",
    },
    {
      id: 3,
      institution: "University of Ibadan",
      department: "Department of Computer Science",
      matricNumber: "UIB345678",
      gradYear: 2020,
      transcript: "Ibadan_Transcript.pdf",
      about:
        "One of the most respected universities in Nigeria, offering comprehensive computer science programs.",
    },
    {
      id: 4,
      institution: "University of Calabar",
      department: "Department of Computer Science",
      matricNumber: "UCB456789",
      gradYear: 2019,
      transcript: "Calabar_Transcript.pdf",
      about:
        "A growing university with a strong focus on research and practical skills in computer science.",
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
