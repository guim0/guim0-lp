import { Card, ICard } from "../../components/Card";
import styles from "./About.module.scss";

const works: ICard[] = [
  {
    name: "React",
    logo: "/atom.png",
    description:
      "HTML,CSS and Javascript is my major bases of development, but is important to know DOM manipulation, Single-Page-Application and so on.",
  },
  {
    name: "NextJS",
    logo: "/next.png",
    description:
      "<p>NextJS is a great form to put together, performance and Data Fetching</p>  <li>Server-side Rendering</li> <li>Client-side Rendering</li> <li>Dynamic routing</li> ",
  },
  {
    name: "CSS Frameworks and Design Systems",
    logo: "/code.png",
    description:
      "<p>It's very commum to used some frameworks to improve development speed</p>  <li>Styled-components</li> <li>TailwindCSS</li> <li>Material UI and more..</li> ",
  },
  {
    name: "Testing: Jest And Cypress",
    logo: "/testing.svg",
    description:
      "<p>Unit testng and E2E. </p>  <li>Components Testing</li> <li>Unit functions and hooks</li> <li>Also mimic user behavior.</li> ",
  },
  {
    name: "React Native - Mobile Development",
    logo: "/atom.png",
    description:
      "<p>Very useful react developers, can be used to build hibrid applications.</p> ",
  },
];
const projects: ICard[] = [
  {
    name: "Check my Github",
    logo: "/github-mark.svg",
    description:
      "Sometimes i forget to update here, so my Github may be more accurate about my experience",
    url: "https://github.com/guim0",
  },
  {
    name: "Rick and Morty",
    logo: "/rickandmorty.png",
    description:
      "<p>This is a personal project, its powered by Rick and Morty API and integrated with React-Query, please take a look</p>",
    url: "https://rick-morty-encyclopedia.vercel.app/",
  },
  {
    name: "CRUD System",
    logo: "/atom.png",
    description:
      "<p>A test with focus on OAuth using Next Auth, it's possible to CREATE / ADD / REMOVE items from cart also, to a company called Mission Brasil. <a href='https://github.com/guim0/mission-challenge?tab=readme-ov-file#mission-brasil-frontend-challenge' target='_blank'>Check the doc on Github.</a></p>",
    url: "https://mission-challenge-guimo.vercel.app/",
  },

  {
    name: "Landing Page",
    logo: "/atom.png",
    description:
      "<p>Created a Landing page, they need to be pixel perfect, the company called Elite Coders, was a international role</p>",
    url: "https://elite-coders-test.vercel.app/",
  },
  {
    name: "Lembrador: Friendly Reminder App, made to People with ADHD",
    logo: "/atom.png",
    description:
      "<p>I created an App in React Native, i was my Fnal paper por college </p>",
    url: "https://github.com/guim0/lembrador",
  },
];
export const About = () => {
  return (
    <main className={styles.about}>
      <h1>About works and projects</h1>

      <section>
        <h3>Some projects</h3>
        <div className={styles.services}>
          {projects.map((items: ICard, idx: number) => (
            <Card key={idx} {...items} />
          ))}
        </div>
        <h3>Some of my skills</h3>
        <div className={styles.services}>
          {works.map((items: ICard, idx: number) => (
            <Card key={idx} {...items} />
          ))}
        </div>
      </section>
    </main>
  );
};
