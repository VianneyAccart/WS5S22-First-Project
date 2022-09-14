import Wilder from "./components/wilder/Wilder";
import styles from "./App.module.css";

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

function App() {
  // fetch list of wilders from API

  return (
    <div>
      <header>
        <div className={styles.container}>
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className={styles.container}>
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
      </main>
      <footer>
        <div className={styles.container}>
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
