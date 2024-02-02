import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Hello, my name is Guilherme but i prefer Guimo</h1>
      <section>
        <p>
          As a Front-end developer, i always wonder how can i improve in my
          work.
        </p>

        <div className={styles.myPhoto}>
          <img src="/me.jpg" alt="" />
        </div>
      </section>
    </main>
  );
};
