import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CreateWilder from "../pages/CreateWilder/CreateWilder";
import Home from "../pages/Home/Home";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-wilder" element={<CreateWilder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
