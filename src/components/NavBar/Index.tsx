import styles from "./Navbar.module.scss";

export const NavBar = () => {
  const navBarOptions = [
    {
      title: "Github",
      url: "https://github.com/guim0",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/guim0-dev/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/GuigolinoDev",
    },
  ];

  return (
    <header>
      <ul className={styles.navbar}>
        <img src="/logo.svg" alt="" />
        {navBarOptions.map((items) => (
          <li>
            <a href={items.url} target="_blank">
              {items.title}{" "}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
