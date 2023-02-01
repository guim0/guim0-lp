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
    name: "Testing",
    logo: "/jest.png",
    description:
      "<p>Testing components, Unit tests and testing user. </p>  <li>Components Testing</li> <li>Unit functions and hooks</li> <li>Can be used to TDD on frontend</li> ",
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
    name: "Fipe Research",
    logo: "/code.png",
    description:
      "It's very common when you need to sell your car, to search a base value from 'Fipe' ",
    url: "https://mobi-auto-woad.vercel.app/search",
  },
  {
    name: "Rick and Morty",
    logo: "/rickandmorty.png",
    description:
      "<p>Full page with the records from all Rick and Morty Characters, using React-Query to manage data fetching.</p>",
    url: "https://rick-and-morty-react-query-iota.vercel.app/",
  },
  {
    name: "CRUD System",
    logo: "/atom.png",
    description:
      "<p>CRUD System, used to study context from react and some implementation for creating and login</p>",
    url: "https://crud-user-beta.vercel.app/",
  },
];
export const About = () => {
  return (
    <main className={styles.about}>
      <h1>About works and projects</h1>

      <section>
        <h3>Some of my skills</h3>
        <div className={styles.services}>
          {works.map((items: ICard) => (
            <Card {...items} />
          ))}
        </div>
        <h3>Some projects</h3>
        <div className={styles.services}>
          {projects.map((items: ICard) => (
            <Card {...items} />
          ))}
        </div>
      </section>
    </main>
  );
};
