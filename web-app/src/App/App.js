import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
