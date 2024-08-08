import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Publicis Groupe Design System Components
import { PgdsButton } from "@pg.dsp/components";
import "@pg.dsp/components/dist/atoms/Button/pgds-button.css";

// Local styles
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Playground)</h1>
      <section>
        <h2 style={{ color: "var(--pgds-color-base-orange-normal)" }}>
          Importing and using a React component from the Design system Package
        </h2>
        <ul>
          <li>
            <h3>Button</h3>
            <ul>
              <li>
                <PgdsButton label="Example button from @pg.dsp package" />
              </li>
              <li>
                <PgdsButton classNames={["class1", "class2"]} label="Custom style class" />
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <p className="footer">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
