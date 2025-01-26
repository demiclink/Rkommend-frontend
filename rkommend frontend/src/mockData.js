const mockData = {
  student: {
    name: "Dr. Adamu Joshua",
    title: "Dr.",
    firstname: "Joshua",
    lastname: "Adamu",
    greeting: "Good morning",
    date: "Tuesday, December 28, 2023",
    email: "dadamujosh99@yahoo.com",
    phonenumber: "+2349012345678",
    institution: "University of Ilorin",
    department: "Performing Arts",
    reqavail: 0,
    checkout: "failed",
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
        department: "Computer Science",
        program: "MSc.",
        status: "Completed",
        date: "December 12, 2024",
        message: "Your request has been completed",
        deadline: "24th August, 2025",
        comments: [
          {
            date: "December 10, 2024",
            comment: "Completed the recommendation letter.",
          },
          {
            date: "December 9, 2024",
            comment: "Reviewed the student's academic performance.",
          },
        ],
      },
      {
        id: 2,
        professor: "Dr. Nathaniel Graham",
        institution: "Harvard University",
        department: "Engineering",
        status: "Pending",
        date: "December 13, 2024",
        message: "Your request was accepted",
        deadline: "24th August, 2025",

        comments: [
          {
            date: "December 11, 2024",
            comment: "Requested additional documents from the student.",
          },
        ],
      },
      {
        id: 3,
        professor: "Dr. Eloisse Motunrayo",
        institution: "Oxford University",
        department: "Mathematics",
        status: "Declined",
        date: "December 10, 2024",
        message: "Your request was rejected",
        deadline: "24th August, 2025",

        comments: [
          {
            date: "December 8, 2024",
            comment: "Unable to proceed with the request due to lack of time.",
          },
        ],
      },
      {
        id: 4,
        professor: "Dr. Sarah Williams",
        institution: "Stanford University",
        department: "Physics",
        status: "In Progress",
        date: "December 19, 2024",
        message: "Your request was accepted",
        deadline: "23rd August, 2025",

        comments: [
          {
            date: "December 18, 2024",
            comment: "Accepted the request, preparing the recommendation.",
          },
        ],
      },
      {
        id: 5,
        professor: "Prof. Eloisse Motunrayo",
        institution: "Oxford University",
        department: "Biology",
        status: "Pending",
        date: "December 13, 2024",
        message: "Your request was rejected",
        deadline: "23rd August, 2025",

        comments: [],
      },
      {
        id: 6,
        professor: "Prof. Adebayo Ibrahim",
        institution: "University of Ilorin",
        department: "Chemistry",
        status: "Completed",
        date: "December 20, 2024",
        deadline: "23rd August, 2025",

        message: "Your request has been completed",
        comments: [
          {
            date: "December 19, 2024",
            comment: "Submitted the recommendation to the university.",
          },
        ],
      },
      {
        id: 7,
        professor: "Prof. Funmi Adeyemi",
        institution: "University of Ilorin",
        department: "Geography",
        status: "Declined",
        date: "December 21, 2024",
        message: "Your request was accepted",
        deadline: "24th August, 2025",

        comments: [
          {
            date: "December 20, 2024",
            comment: "Declined due to the professor's unavailability.",
          },
        ],
      },
      {
        id: 8,
        professor: "Prof. Samuel Olayinka",
        institution: "University of Ilorin",
        department: "Sociology",
        status: "In Progress",
        date: "December 22, 2024",
        message: "Your request is in progress",
        deadline: "24th August, 2025",

        comments: [
          {
            date: "December 21, 2024",
            comment: "Accepted the request, currently drafting the letter.",
          },
        ],
      },
      {
        id: 9,
        professor: "Prof. Grace Enobong",
        institution: "University of Calabar",
        department: "Law",
        status: "Completed",
        date: "December 23, 2024",
        message: "Your request has been completed",
        deadline: "24th August, 2025",

        comments: [
          {
            date: "December 22, 2024",
            comment: "Successfully completed the recommendation.",
          },
        ],
      },
      {
        id: 10,
        professor: "Prof. Idongesit Okon",
        institution: "University of Calabar",
        department: "Political Science",
        status: "Pending",
        date: "December 24, 2024",
        message: "Your request was accepted",
        deadline: "24th August, 2025",

        comments: [],
      },
      {
        id: 11,
        professor: "Prof. Enitan Akpan",
        institution: "University of Calabar",
        department: "Economics",
        status: "In Progress",
        deadline: "24th August, 2025",

        date: "December 25, 2024",
        message: "Your request is in progress",
        comments: [
          {
            date: "December 24, 2024",
            comment: "Started preparing the recommendation.",
          },
        ],
      },
      {
        id: 12,
        professor: "Prof. Joseph Akin",
        institution: "University of Ibadan",
        department: "History",
        status: "Completed",
        deadline: "24th August, 2025",

        date: "December 26, 2024",
        message: "Your request has been completed",
        comments: [
          {
            date: "December 25, 2024",
            comment: "Submitted the recommendation for History.",
          },
        ],
      },
      {
        id: 13,
        professor: "Prof. Olamide Adebisi",
        institution: "University of Ibadan",
        department: "Literature",
        deadline: "24th August, 2025",

        status: "Pending",
        date: "December 27, 2024",
        message: "Your request was accepted",
        comments: [],
      },
      {
        id: 14,
        professor: "Prof. Maryam Alabi",
        institution: "University of Ibadan",
        department: "Philosophy",
        status: "In Progress",
        date: "December 28, 2024",
        message: "Your request is in progress",
        deadline: "24th August, 2025",

        comments: [
          {
            date: "December 27, 2024",
            comment: "Working on the recommendation for Philosophy.",
          },
        ],
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
// mockData.student.checkout = Math.random() < 0.5 ? "success" : "failed";

export const fetchMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Simulate API delay
  });
};
