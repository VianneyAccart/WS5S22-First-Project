import styles from "./Home.module.scss";
import Wilder from "../../components/Wilder/Wilder";

const WILDERS = [
  {
    id: "wilder-1",
    firstname: "Vianney",
    lastname: "Accart",
    skills: [
      {
        id: "skill-1",
        skillName: "PHP",
      },
    ],
  },
  {
    id: "wilder-2",
    firstname: "Adam",
    lastname: "Roux",
    skills: [
      {
        id: "skill-2",
        skillName: "JavaScript",
      },
    ],
  },
  {
    id: "wilder-3",
    firstname: "Ario",
    lastname: "Ngu",
    skills: [
      {
        id: "skill-1",
        skillName: "PHP",
      },
      {
        id: "skill-2",
        skillName: "JavaScript",
      },
      {
        id: "skill-3",
        skillName: "TypeScript",
      },
      {
        id: "skill-4",
        skillName: "Java",
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <h2>Wilders</h2>
      <section className={styles.cardRow}>
        {WILDERS.map((wilder) => (
          <Wilder
            key={wilder.id}
            firstname={wilder.firstname}
            lastname={wilder.lastname}
            skills={wilder.skills}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
