import styles from "./Home.module.scss";
import Wilder from "../../components/Wilder/Wilder";
import { useEffect, useState } from "react";

const Home = () => {
  const [wilders, setWilders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("/wilders");
      const wilders = await response.json();
      setWilders(wilders);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <h2>Wilders</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <section className={styles.cardRow}>
          {wilders?.map((wilder) => (
            <Wilder
              key={wilder.id}
              firstname={wilder.firstname}
              lastname={wilder.lastname}
              skills={wilder.skills}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Home;
