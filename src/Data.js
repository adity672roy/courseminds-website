import Img1 from "./images/img1.jpeg";
import Img2 from "./images/img2.png";
import Img3 from "./images/img3.jpeg";
import Img4 from "./images/img4.jpeg";
import Img5 from "./images/img5.jpeg";
import Img6 from "./images/img6.jpeg";
import Img7 from "./images/img7.jpeg";
import Img8 from "./images/img8.jpeg";
import Img9 from "./images/img9.jpeg";
import Img10 from "./images/img10.png";
const coursesData = {
  1: {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: Img1,
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  2: {
    id: 2,
    name: "Advanced React Development",
    instructor: "Jane Smith",
    description:
      "Deepen your understanding of React and explore advanced development concepts.",
    enrollmentStatus: "In progress",
    thumbnail: Img2,
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Onsite",
    prerequisites: [
      "Intermediate React knowledge",
      "Experience with state management",
    ],
    syllabus: [
      {
        week: 1,
        topic: "React Hooks",
        content:
          "Understanding and using React Hooks for state and side effects.",
      },
      {
        week: 2,
        topic: "Context API",
        content: "Managing global state with React Context API.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Diana Miller",
        email: "diana@example.com",
      },
      // Additional enrolled students...
    ],
  },
  3: {
    id: 3,
    name: "Web Design Fundamentals",
    instructor: "Eva Garcia",
    description:
      "Master the basics of web design, including HTML, CSS, and responsive design.",
    enrollmentStatus: "In Progress",
    thumbnail: Img3,
    duration: "6 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "HTML Basics",
        content: "Introduction to HTML tags and document structure.",
      },
      {
        week: 2,
        topic: "CSS Styling",
        content: "Styling web pages using CSS for layout and appearance.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 105,
        name: "Ethan Martinez",
        email: "ethan@example.com",
      },
      {
        id: 106,
        name: "Fiona Davis",
        email: "fiona@example.com",
      },
      // Additional enrolled students...
    ],
  },
  4: {
    id: 4,
    name: "Python Programming Basics",
    instructor: "Alex Turner",
    description:
      "Learn the fundamentals of Python programming language for beginners.",
    enrollmentStatus: "Closed",
    thumbnail: Img4,
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Onsite",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python",
        content: "Overview of Python syntax and basic data types.",
      },
      {
        week: 2,
        topic: "Control Flow",
        content:
          "Understanding if statements, loops, and conditional structures.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 107,
        name: "Grace Clark",
        email: "grace@example.com",
      },
      {
        id: 108,
        name: "Harry Turner",
        email: "harry@example.com",
      },
      // Additional enrolled students...
    ],
  },
  5: {
    id: 5,
    name: "Data Science with Python",
    instructor: "Olivia Brown",
    description:
      "Explore data science concepts using Python, including data analysis and visualization.",
    enrollmentStatus: "Closed",
    thumbnail: Img5,
    duration: "12 weeks",
    schedule: "Wednesdays and Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Data Exploration",
        content: "Introduction to data analysis and exploring datasets.",
      },
      {
        week: 2,
        topic: "Data Visualization",
        content:
          "Creating visualizations using libraries like Matplotlib and Seaborn.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 109,
        name: "Ivy Taylor",
        email: "ivy@example.com",
      },
      {
        id: 110,
        name: "Jack Robinson",
        email: "jack@example.com",
      },
      // Additional enrolled students...
    ],
  },
  6: {
    id: 6,
    name: "JavaScript Fundamentals",
    instructor: "Samuel Carter",
    description:
      "Master the fundamentals of JavaScript programming language for web development.",
    enrollmentStatus: "Open",
    thumbnail: Img6,
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of HTML and CSS"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to JavaScript",
        content: "Basic concepts, variables, and data types.",
      },
      {
        week: 2,
        topic: "Control Flow and Functions",
        content: "Conditional statements, loops, and function declarations.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 111,
        name: "Grace Adams",
        email: "grace@example.com",
      },
      {
        id: 112,
        name: "Henry Wilson",
        email: "henry@example.com",
      },
      // Additional enrolled students...
    ],
  },
  7: {
    id: 7,
    name: "Python for Beginners",
    instructor: "Sophia Davis",
    description:
      "Get started with Python programming language, covering basics and simple applications.",
    enrollmentStatus: "Open",
    thumbnail: Img7,
    duration: "6 weeks",
    schedule: "Fridays, 4:00 PM - 6:00 PM",
    location: "Onsite",
    prerequisites: ["No prior programming experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python",
        content: "Understanding Python syntax and basic programming concepts.",
      },
      {
        week: 2,
        topic: "Control Structures",
        content: "Using if statements, loops, and functions in Python.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: "Mason Wright",
        email: "mason@example.com",
      },
      {
        id: 114,
        name: "Natalie Harris",
        email: "natalie@example.com",
      },
      // Additional enrolled students...
    ],
  },
  8: {
    id: 8,
    name: "Cybersecurity Fundamentals",
    instructor: "Oliver White",
    description:
      "Explore the basics of cybersecurity, including network security and threat detection.",
    enrollmentStatus: "Closed",
    thumbnail: Img8,
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic computer knowledge", "Understanding of networks"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content:
          "Overview of cybersecurity, types of threats, and defense strategies.",
      },
      {
        week: 2,
        topic: "Network Security",
        content:
          "Securing computer networks from unauthorized access and attacks.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 115,
        name: "Olivia Robinson",
        email: "olivia@example.com",
      },
      {
        id: 116,
        name: "Peter Adams",
        email: "peter@example.com",
      },
      // Additional enrolled students...
    ],
  },
  9: {
    id: 9,
    name: "Machine Learning Basics",
    instructor: "Liam Turner",
    description:
      "Introduction to machine learning concepts, algorithms, and applications.",
    enrollmentStatus: "In Progress",
    thumbnail: Img9,
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Onsite",
    prerequisites: [
      "Basic understanding of Python", 
      "Mathematics fundamentals",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content:
          "Understanding the basic concepts and applications of machine learning.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content:
          "Overview and implementation of supervised learning algorithms.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 117,
        name: "Quinn Campbell",
        email: "quinn@example.com",
      },
      {
        id: 118,
        name: "Rachel Ward",
        email: "rachel@example.com",
      },
      // Additional enrolled students...
    ],
  },
  10: {
    id: 10,
    name: "Mobile App Marketing",
    instructor: "Mia Martinez",
    description:
      "Strategies and techniques for marketing mobile applications effectively.",
    enrollmentStatus: "Open",
    thumbnail: Img10,
    duration: "8 weeks",
    schedule: "Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of mobile app development"],
    syllabus: [
      {
        week: 1,
        topic: "Understanding the App Market",
        content: "Researching and analyzing the mobile app market.",
      },
      {
        week: 2,
        topic: "Social Media Marketing",
        content: "Utilizing social media platforms for app marketing.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 119,
        name: "Samuel Foster",
        email: "samuel@example.com",
      },
      {
        id: 120,
        name: "Tara Parker",
        email: "tara@example.com",
      },
      // Additional enrolled students...
    ],
  },
};

export default coursesData;
