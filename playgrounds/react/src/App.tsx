import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { PgdsButton } from "@pg.dsp/components";

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
      <div>
        <h2 style={{ color: "var(--pgds-color-base-orange-normal)" }}>
          Importing and using a React component from the Design system Package
        </h2>
        <PgdsButton label="Example button from @pg.dsp package" />
      </div>
      <p className="footer">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
