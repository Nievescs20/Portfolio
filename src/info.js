const header = {
  // info that will be used in the nav bar
  homepage: "",
  title: "CN.",
};

const about = {
  name: "Christopher Nieves",
  role: "Software Engineer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium ante id mauris malesuada, et egestas ligula eleifend. Nullam sapien ligula, dignissim ac velit quis, auctor venenatis neque. Maecenas a dui vitae lorem rhoncus rutrum faucibus vitae sem. Etiam accumsan urna vel ex pulvinar commodo. Maecenas non fringilla ex. Praesent ac dui sed ipsum auctor blandit. Phasellus neque elit, accumsan et purus blandit, tempor gravida turpis. Cras fermentum porttitor turpis, nec dictum est gravida eget. Suspendisse eu augue et orci facilisis molestie.",
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
