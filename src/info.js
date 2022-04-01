const header = {
  // info that will be used in the nav bar
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "CN.",
};

const about = {
  name: "Christopher Nieves",
  role: "Software Engineer",
  description:
    "Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",
  resume:
    "https://drive.google.com/file/d/1KtXOz_3LIbHQkBVkq9_jPeYwIig4j6Kr/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/christophernieves20/",
    github: "https://github.com/Nievescs20",
    email: "nievescs20@gmail.com",
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
    img: "public/images/flock-img.png",
  },
  {
    name: "Caffein-E Commerce",
    description:
      "Mock e-commerce website providing you with any and all of your caffeine needs",
    stack: ["React", "Redux", "Sequelize"],
    sourceCode: "https://github.com/AmericoneGrizzly/graceshopper-project",
    livePreview: "https://americone.herokuapp.com/",
    img: "public/images/caffeine-commerce-img.png",
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
