import { useState } from "react";
import "./App.css";

import Nav from "./nav/Nav";
import LPDI from "./LPDI/LPDI";
import Footer from "./footer/Footer";

function App() {
  const [page, setPage] = useState("Live Scan");

  return (
    <div className="App">
      <header className="App-header">
        <Nav page={page} setPage={setPage} />
      </header>
      <main>
        <LPDI page={page} setPage={setPage} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
