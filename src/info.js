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
    "https://drive.google.com/file/d/1KtXOz_3LIbHQkBVkq9_jPeYwIig4j6Kr/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/christophernieves20/",
    github: "https://github.com/Nievescs20",
    email: "csn.nieves@gmail.com",
  },
};

const projects = [
  {
    name: "flock",
    description:
      "flock is a progressive web app that aims to be the one stop shop for runners looking for group run events.",
    stack: ["React", "Redux", "Leaflet"],
    sourceCode: "https://github.com/FSA-2106-Lettuce/capstone",
    livePreview: "https://flock-of-lettuce.herokuapp.com/",
    img: "/images/flock-app.webp",
  },
  {
    name: "Caffein-E Commerce",
    description:
      "Mock e-commerce website providing you with any and all of your caffeine needs",
    stack: ["React", "Redux", "Sequelize"],
    sourceCode: "https://github.com/AmericoneGrizzly/graceshopper-project",
    livePreview: "https://americone.herokuapp.com/",
    img: "/images/caffeine-commerce-img.webp",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Leaflet",
  "SQL",
  "Tailwind CSS",
  "Material UI",
  "Git",
];

export { header, about, projects, skills };
