const mockData = {
  student: {
    name: "Dr. Adamu Joshua",
    greeting: "Good morning",
    date: "Tuesday, December 28, 2023",
    email: "dadamujosh99@yahoo.com",
    phonenumber: "+2349012345678",
    reqavail: 1,
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
        professor: "Dr. Eloisse Motunrayo",
        institution: "Oxford University",
        status: "Completed",
        date: "December 12, 2024",
        message: "Your request has been completed",
      },
      {
        id: 2,
        professor: "Dr. Nathaniel Graham",
        institution: "Harvard University",
        status: "Pending",
        date: "December 13, 2024",
        message: "Your request was accepted",
      },
      {
        id: 3,
        professor: "Dr. Eloisse Motunrayo",
        institution: "Oxford University",
        status: "Declined",
        date: "December 10, 2024",
        message: "Your request was rejected",
      },
      {
        id: 4,
        professor: "Dr. Sarah Williams",
        institution: "Stanford University",
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
      {
        id: 6,
        professor: "Prof. Adebayo Ibrahim",
        institution: "University of Ilorin",
        status: "Completed",
        date: "December 20, 2024",
        message: "Your request has been completed",
      },
      {
        id: 7,
        professor: "Prof. Funmi Adeyemi",
        institution: "University of Ilorin",
        status: "Pending",
        date: "December 21, 2024",
        message: "Your request was accepted",
      },
      {
        id: 8,
        professor: "Prof. Samuel Olayinka",
        institution: "University of Ilorin",
        status: "In Progress",
        date: "December 22, 2024",
        message: "Your request is in progress",
      },
      {
        id: 9,
        professor: "Prof. Grace Enobong",
        institution: "University of Calabar",
        status: "Completed",
        date: "December 23, 2024",
        message: "Your request has been completed",
      },
      {
        id: 10,
        professor: "Prof. Idongesit Okon",
        institution: "University of Calabar",
        status: "Pending",
        date: "December 24, 2024",
        message: "Your request was accepted",
      },
      {
        id: 11,
        professor: "Prof. Enitan Akpan",
        institution: "University of Calabar",
        status: "In Progress",
        date: "December 25, 2024",
        message: "Your request is in progress",
      },
      {
        id: 12,
        professor: "Prof. Joseph Akin",
        institution: "University of Ibadan",
        status: "Completed",
        date: "December 26, 2024",
        message: "Your request has been completed",
      },
      {
        id: 13,
        professor: "Prof. Olamide Adebisi",
        institution: "University of Ibadan",
        status: "Pending",
        date: "December 27, 2024",
        message: "Your request was accepted",
      },
      {
        id: 14,
        professor: "Prof. Maryam Alabi",
        institution: "University of Ibadan",
        status: "In Progress",
        date: "December 28, 2024",
        message: "Your request is in progress",
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
