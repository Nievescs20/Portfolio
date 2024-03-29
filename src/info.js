const header = {
  homepage: "https://www.chris-nieves.com",
  title: "CN.",
};

const about = {
  name: "Christopher Nieves",
  role: "Software Engineer",
  description:
    "I am a Fullstack Developer located in New York. I have serious passion for creating meaningful work, helping others and bringing to life new and exciting applications. Well organized person and problem solver with high attention to detail. Fan of soccer, rock climbing and many other outdoor activities. Interested in fullstack development and working on ambitous projects with positive people.",
  resume:
    "https://drive.google.com/file/d/1zLXevca4Pe8ps6dHNGxYctd6CTXFgS-p/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/christophernieves20/",
    github: "https://github.com/Nievescs20",
    email: "csn.nieves@gmail.com",
  },
};

const projects = [
  {
    name: "Contracted Site For A Photographer",
    description:
      "IN PROGRRESS: Website for a photographer to showcase their work as well as sell videograpy and photography resources.\nCurrently waiting on products and descriptions from client",
    stack: ["React", "Redux", "Stripe", "Tailwind"],
    sourceCode: "https://github.com/Nievescs20/B-A",
    livePreview: "https://b-a.onrender.com/",
    img: "/images/Brandon.png",
  },
  {
    name: "Candy Co",
    description:
      "Mock e-commerce website providing you with any and all of your sweet tooth needs",
    stack: ["React", "Redux", "Sequelize", "Stripe", "Tailwind"],
    sourceCode: "https://github.com/Nievescs20/CandyCo",
    livePreview: "https://candyco.herokuapp.com/home",
    img: "/images/candyco-homepage.png",
  },
  {
    name: "Fitness-TS",
    description:
      "Mock gym website empowering you to be the very best version of yourself!",
    stack: ["TypeScript", "React", "TailwindCSS"],
    sourceCode: "https://github.com/Nievescs20/fitness-ts",
    livePreview: "https://fitness-ts.onrender.com/",
    img: "/images/fitness-homepage.png",
  },
  {
    name: "flock",
    description:
      "flock is a progressive web app that aims to be the one stop shop for runners looking for group run events.",
    stack: ["React", "Redux", "Leaflet", "Socket.io"],
    sourceCode: "https://github.com/FSA-2106-Lettuce/capstone",
    livePreview: "https://flock-of-lettuce.herokuapp.com/",
    img: "/images/flock-app.webp",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "Leaflet",
  "PostgreSQL",
  "SQL",
  "Tailwind CSS",
  "Material UI",
  "Git",
];

export { header, about, projects, skills };
