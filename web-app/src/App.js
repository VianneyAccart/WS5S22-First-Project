import "./App.css";
import Wilder from "./components/Wilder";

function App() {
  // fetch list of wilders from API.

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
          <Wilder
            firstname="Vianney"
            lastname="Accart"
            name=""
            numberOfVotes=""
          />
          <Wilder firstname="Adam" lastname="Roux" name="" numberOfVotes="" />
          <Wilder firstname="Ario" lastname="Ngu" name="" numberOfVotes="" />
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
