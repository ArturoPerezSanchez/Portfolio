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
    mercedes,
    anzen,
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
      title: "Software Engineer",
      icon: Software_developer_logo,
      description: "4 years of experience. Strong background in algorithms and system design. Experienced in building scalable APIs, optimizing cloud deployments, and integrating AI-driven solutions.",
      background: Software_developer_background,
    },
    {
      title: "Data Analyst",
      icon: data_analyst_logo,
      description: "1.5 Years of experience as data analyst at Management Solutions, Analyzing vast volumes of financial data for a major bank, Developing sophisticated models while collaborating with cross-functional teams.",
      background: data_analyst_background,
    },
    {
      title: "Product Owner",
      icon: PO_logo,
      description: "As the Product Owner of QBI Solutions, I led cross-functional teams in developing innovative software solutions that have revolutionized data analysis in the renewable energies industry.",
      background: PO_background,
    },
    {
      title: "Content Creator",
      icon: content_logo,
      description: "As a content creator for a blog focused on web development, AI, and science curiosities, I enjoy diving deep into the realm of cutting-edge technologies and exploring their intersection with human necesities.",
      background: content_background,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      color: 'skyblue',
      icon: python,
    },
    {
      name: "C++",
      color: 'skyblue',
      icon: c_plus_plus,
    },
    {
      name: "Java",
      color: 'skyblue',
      icon: java,
    },
    {
      name: "HTML 5",
      color: 'MediumSlateBlue',
      icon: html,
    },
    {
      name: "CSS 3",
      color: 'MediumSlateBlue',
      icon: css,
    },
    {
      name: "JavaScript",
      color: 'MediumSlateBlue',
      icon: javascript,
    },
    {
      name: "Node JS",
      color: 'MediumSlateBlue',
      icon: nodejs,
    },
    {
      name: "React JS",
      color: 'MediumSlateBlue',
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      color: 'MediumSlateBlue',
      icon: tailwind,
    },
    {
      name: "MongoDB",
      color: 'gold',
      icon: mongodb,
    },
    {
      name: "SQL",
      color: 'gold',
      icon: sql,
    },
    {
      name: "Git",
      color: 'gold',
      icon: git,
    },
    {
      name: "Docker",
      color: 'gold',
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Mercedes Benz",
      icon: mercedes,
      iconBg: "#DDDDDD",
      date: "June 2024 - Present",
      points: [
        "Optimized Kubernetes deployments with Helm, improving scalability and reducing downtime by 30%.",
        "Deployed ML models using MLflow, Redis, and Milvus, enhancing data retrieval speed by 40%.",
        "Built and optimized high-performance APIs with FastAPI, reducing response times by 35%.",
        "Refactored a large-scale data pipeline in TypeScript, improving maintainability and processing efficiency by 25%."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Anzen Engineering",
      icon: anzen,
      iconBg: "#fff",
      date: "November 2023 - June 2024",
      points: [
        "Developed a Capella plugin in Java and Python, integrating ChatGPT to automate safety assessments, reducing manual analysis time by 50%.",
        "Led the deployment of a web-based Capella version using Apache Guacamole, Docker, Kubernetes, and React, enabling remote access for 10+ engineers and improving collaboration.",
        "Optimized workflows by automating data processing and validation, improving efficiency in safety analysis reports by 30%.",
      ],
    },
    {
      title: "Product Owner",
      company_name: "QBI Solutions",
      icon: qbi_solutions,
      iconBg: "#DDDDDD",
      date: "April 2023 - October 2023",
      points: [
        "Defined and prioritized product features working closely with stakeholders to gather requirements, analyze market trends, and define the product vision ensuring alignment with business goals and user needs.",
        "Managed the product roadmap, maintained a strategic roadmap that outlines the product's direction, milestones, and release plans.",
        "Monitorized and optimized product performance analyzing key metrics, user feedback, and market trends to assess the product's performance and identify areas for improvement.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Management Solutions",
      icon: management_solutions,
      iconBg: "#012152",
      date: "September 2021 - March 2023",
      points: [
        "Led a team of 4 analysts in various management control projects for a major financial institution.",
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
      head: "Valued team member and client advocate",
      testimonial:
        "With a good attitude and good technical skills. In the time he was working with us Arturo became a reference person for both colleagues and the client.",
      name: "Victor Julio Sánchez",
      designation: "Supervisor",
      company: "Management Solutions",
      image: "src/assets/feedback/Victor.jpg",
    },
    {
      head: "Positive, valuable team player",
      testimonial:  "I found him to be a good teammate, he contributed positively to the good atmosphere in the group.",
      name: "Jesus Olmeda",
      designation: "Experienced Senior Consultant",
      company: "Management Solutions",
      image: "src/assets/feedback/Jesus.jpg",
    },
    {
      head: "Pivotal to project success",
      testimonial: "Arturo is a proactive, organized and motivated person. He was key in the success of the project contributing ideas, learning and adapting quickly to the project environment.",
      name: "Joaquin Gonzalez",
      designation: "Software Integration Engineer",
      company: "EDICOM",
      image: "src/assets/feedback/Joaquin.jpg",
    },
    // {
    //   head: "Dedicated and problem-solver",
    //   testimonial: "An exceptional collaborator. High involvement in the work, always giving his maximum effort to obtain outstanding results. Characterized by his constant search for more efficient ways to perform the assigned tasks.",
    //   name: "Mikhael Del Aguila",
    //   designation: "Data Visualization Expert",
    //   company: "EDNON",
    //   image: "https://media.licdn.com/dms/image/D4D35AQFrfZ2JwB8t4g/profile-framedphoto-shrink_400_400/0/1675880155124?e=1687978800&v=beta&t=kQYPjYycQoSI_AKPm-9ogbXi9i7EA6ONiacyKos-iLU",
    // },
    {
      head: "Highly valuable team member",
      testimonial: "His contribution to the team has been very significant, demonstrating his knowledge and leadership. He is a decisive person capable of working independently without neglecting cooperation with her colleagues.",
      name: "Joaquín Romero",
      designation: "I+D Researcher",
      company: "Proxya",
      image: "src/assets/feedback/JoaquinR.jpg",
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