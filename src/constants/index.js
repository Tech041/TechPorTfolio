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
  fitpulse,
  figma,
  docker,
  ai_clinic,
  mikeshop,
  geoapp,
  threejs,
  avatar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Nextjs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Freelancer",
    icon: mobile,
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
    title: "Frontend Developer",
    company_name: "Fiverr (Freelancing)",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Collaborated with UX/UI designers to translate design mockups into pixel-perfect, responsive interfaces, ensuring a consistent and visually appealing user experience across devices.",
      "Implemented server-side rendering (SSR) and static site generation (SSG) using Next.js, enhancing the application's performance and SEO capabilities",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Upwork (Freelancing)",
    icon: "",
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developed and maintained various modules of a complex web application, employing React.js/Next.js and TypeScript for the frontend and consumed .Net, Django, Spring Boot and REST APIs  ",
      "Integrated third-party APIs and services to extend application functionalities, improving the overall user experience. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nelson is  one of the  great and dedicated developers in Fiverr",
    name: "Thony Stones",
    designation: "Digital Marketer",
    company: "Megabon",
    image: avatar,
  },
  {
    testimonial:
      "Am pleased with my last engagemnet with Nelson  in our last project, he is good in what he does",
    name: "Gregg Broos",
    designation: "Product Manager",
    company: "Ivercom",
    image: avatar,
  },
];

const projects = [
 
  {
    name: "E-Shop",
    description:
      "E-Shop is an ecommerce web application that enables users to buy different electronic devices such as phones, laptops, watch, headphones e.t.c at their comfort of their homes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: mikeshop,
    source_code_link: "",
    live_demo_link: "https://just-electronics.onrender.com/",
  },
  {
    name: "FitPulse",
    description:
      "FitPulse is a a modern UI/UX gym website where clients can book sessions, chat real time with admin or gym instructors and also choose type of services they want.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image:fitpulse,
    source_code_link: "",
    live_demo_link: "https://myfitnesspulse.vercel.app/",
  },

  {
    name: "MedSpark",
    description:
      "This is a SaaS project, where clients can seek automated health care support at the comfort of their homes using their devices.The applications performs diagnosis with prevailing symptoms, recommends quick treatment plans and other automated health tasks.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: ai_clinic,
    source_code_link: "",
    live_demo_link: "https://medsparkautoclinic.vercel.app/",
  },
  {
    name: "GEO-APP",
    description:
      "GEO-APP is a weather app built to facilitate geographical data monitoring among pilots, sailors and travellers in general.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Open weather API",
        color: "pink-text-gradient",
      },
    ],
    image: geoapp,
    source_code_link: "",
    live_demo_link: "https://geoweatherapp.vercel.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
