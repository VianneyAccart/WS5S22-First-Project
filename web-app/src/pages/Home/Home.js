import styles from "./Home.module.scss";
import Wilder from "../../components/Wilder/Wilder";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

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
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2>Wilders</h2>
        <Link className={`${styles.link} ms-3`} to="/create-wilder">
          <button className={styles.button}>
            Add <i className="bi bi-plus-circle"></i>
          </button>
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : wilders.length ? (
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
      ) : (
        <p>Oops... It seems that no wilder has been found !</p>
      )}
    </>
  );
};

export default Home;
