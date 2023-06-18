import {
    Software_developer_logo,
    data_analyst_logo,
    PO_logo,
    content_logo,
    Software_developer_background,
    data_analyst_background,
    PO_background,
    content_background,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    management_solutions,
    qbi_solutions,
    ntt_data,
    carrent,
    jobit,
    tripguide,
    sql,
    java,
    c_plus_plus,
    python,
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
      title: "Software developer",
      icon: Software_developer_logo,
      description: "7 Months of experience As a software developer at NTT Data, Implementing intuitive user interfaces, eensuring seamless user experiences and delivering high-quality frontend solutions.",
      background: Software_developer_background,
    },
    {
      title: "Data Analyst",
      icon: data_analyst_logo,
      description: "1.5 Years of experience as data analyst at Management Solutions, \n Analyzing vast volumes of financial data for a major bank, Developing sophisticated models while collaborating with cross-functional teams.",
      background: data_analyst_background,
    },
    {
      title: "Product Owner",
      icon: PO_logo,
      description: "As the Product Owner of QBI Solutions, I am leading cross-functional teams in developing innovative software solutions that have revolutionized data analysis in the renewable energies industry.",
      background: PO_background,
    },
    {
      title: "Content Creator",
      icon: content_logo,
      description: "As a content creator for a blog focused on web development, AI, and science curiosities, I have enjoyed diving deep into the realm of cutting-edge technologies and exploring their intersection with human curiosity.",
      background: content_background,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      color: '#00b4d8',
      icon: python,
    },
    {
      name: "C++",
      color: '#03045e',
      icon: c_plus_plus,
    },
    {
      name: "Java",
      color: '#90e0ef',
      icon: java,
    },
    {
      name: "HTML 5",
      color: '#0077b6',
      icon: html,
    },
    {
      name: "CSS 3",
      color: '#caf0f8',
      icon: css,
    },
    {
      name: "JavaScript",
      color: '#03045e',
      icon: javascript,
    },
    {
      name: "Node JS",
      color: '#0077b6',
      icon: nodejs,
    },
    {
      name: "React JS",
      color: '#03045e',
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      color: '#90e0ef',
      icon: tailwind,
    },
    {
      name: "MongoDB",
      color: '#00b4d8',
      icon: mongodb,
    },
    {
      name: "SQL",
      color: '#caf0f8',
      icon: sql,
    },
    {
      name: "Git",
      color: '#0077b6',
      icon: git,
    },
    {
      name: "Docker",
      color: '#00b4d8',
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Product Owner",
      company_name: "QBI Solutions",
      icon: qbi_solutions,
      iconBg: "#DDDDDD",
      date: "April 2023 - Present",
      points: [
        "Defined and prioritized product features working closely with stakeholders to gather requirements, analyze market trends, and define the product vision ensuring alignment with business goals and user needs.",
        "Managed the product roadmap, maintained a strategic roadmap that outlines the product's direction, milestones, and release plans.",
        "Monitorized and optimized product performance analyzing key metrics, user feedback, and market trends to assess the product's performance and identify areas for improvement.",
      ],
    },
    {
      title: "Data Science consultant",
      company_name: "Management Solutions",
      icon: management_solutions,
      iconBg: "#012152",
      date: "September 2021 - March 2023",
      points: [
        "Lead a team of 4 analysts in various management control projects for a major financial institution.",
        "Worked on the complete product development cycle for a major European bank, from the initial idea to production involving an important research component.",
        "Detected, analyzed and automated different repetitive tasks that were being carried out in the company.",
      ],
    },
    {
      title: "Software Engineering internship",
      company_name: "NTT Data",
      icon: ntt_data,
      iconBg: "#6785C1",
      date: "March 2019 - October 2019",
      points: [
        "Developed +25 Web‑Components for the local government that are being used daily by thousands of end users in Andalusia.",
        "Modeled some of the main views of the company’s web portals and designed the developing environment including fully automated CI/CD pipelines",
      ],
    },
  ];
  
  const testimonials = [
    {
      head: "Serious, professional and exigent",
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      head: "Really good teamplayer",
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      head: "Always ready to help",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };