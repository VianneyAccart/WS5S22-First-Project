import "./App.css";
import Wilder from "./components/Wilder";

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
    ],
  },
];

function App() {
  // fetch list of wilders from API

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
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
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
