import styles from "./Card.module.scss";

export type ICard = {
  name: string;
  logo: string;
  description: string;
  url?: string;
};

export const Card = (props: ICard) => {
  return (
    <main className={styles.card}>
      <div>
        <img src={props.logo} alt={props.name} />
        <p>{props.name}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: props?.description }} />
      {props.url && (
        <a href={props.url} className={styles.link}>
          {props.name}
        </a>
      )}
    </main>
  );
};
