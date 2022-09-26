import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="card">
          <img
            src="images/minimalistHills.png"
            class="card-img-top"
            alt="..."
          />
          <Search />
          <br />
          <City />
          <br />
          <Weather />
          <br />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
