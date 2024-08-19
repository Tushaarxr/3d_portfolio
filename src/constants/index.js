import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  DoctorDate,
  DealDigger,
  penitdown,
  aichatbot,
  datayaan,
  corizo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Data Structure & Algorithms",
    icon: mobile,
  },
  {
    title: "Learning AI/ML",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Django Backend Developer Intern",
    company_name: "Datayaan Solutions Pvt Ltd",
    icon: datayaan,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Backend Development: Led the development of a robust Django backend, integrating a PostgreSQL database to manage ads, user data, and events efficiently.",
      "Feature Implementation: Implemented critical features including ad posting and management, advanced search and filtering, and secure in-platform messaging, enhancing user experience and engagement.",
      "Event Management: Integrated an event posting and registration system, allowing users to create and participate in pet-related events.",
      "Collaboration: Worked closely with frontend developers to create a seamless user experience with Vue.js, ensuring dynamic interaction and responsiveness.",
    ],
  },
  {
    title: "AI/ML Intern",
    company_name: "Corizo",
    icon: corizo,
    iconBg: "#E6DEDD",
    date: "June 2023 - Aug 2023",
    points: [
      "Led the development of machine learning models, utilizing regression, classification, and clustering techniques to craft predictive analytics, enabling accurate data-driven forecasting and decision-making.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Doctor Date",
    description:
      "This project is a healthcare patient management application designed to streamline the process of booking and managing doctor appointments. Built using Next.js and Appwrite, it provides a seamless experience for both patients and healthcare administrators",
    tags: [
      {
        name: "Next.Js",
        color: "blue-text-gradient",
      },
      {
        name: "App Write",
        color: "green-text-gradient",
      },
      {
        name: "Twilio",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: DoctorDate,
    source_code_link: "https://github.com/Tushaarxr/DoctorDate-FullStack",
  },
  {
    name: "Deal Digger",
    description:
      "Deal Digger is an advanced e-commerce product scraping site designed to assist users in making informed purchasing decisions. Developed using Next.js and Bright Data's webunlocker, it notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.",
    tags: [
      {
        name: "Next.Js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "BrightData",
        color: "pink-text-gradient",
      },
      {
        name: "Cheerio",
        color: "blue-text-gradient",
      },
    ],
    image: DealDigger,
    source_code_link: "https://github.com/Tushaarxr/DealDigger-full-stack",
  },
  {
    name: "Pen It Down",
    description:
      "A collaborative web application inspired by eraser.io, enabling users to edit documents, create flowcharts, and visualize data using Editor.js. Supports real-time multi-user collaboration with a backend powered by Convex.",
    tags: [
      {
        name: "Next.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Editor.Js",
        color: "green-text-gradient",
      },
      {
        name: "Convex",
        color: "pink-text-gradient",
      },
    ],
    image: penitdown,
    source_code_link: "https://github.com/",
  },
  {
    name: "OpenAI Chatbot",
    description:
      "This project is an OpenAI-powered chatbot that stores user conversations in MongoDB for later access. It provides a robust and scalable solution for saving and retrieving chat histories, making it ideal for applications that require persistent conversation data.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: aichatbot,
    source_code_link: "https://github.com/Tushaarxr/AI-Chatbot",
  },
  {
    name: "Petify",
    description:
      "This project is a feature-rich web application for a pet shop, built using Django as the backend, Vue.js as the frontend, and PostgreSQL as the database. The platform allows users to post and manage ads, create and register for events, and interact with content through features like user creation, liking, and commenting",
    tags: [
      {
        name: "Vue.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tushaarxr/petshop",
  },
];

export { services, technologies, experiences, testimonials, projects };
