import { useState } from "react";
import "./index.css";
import { CrearTweet } from "./components/CrearTweet";
import { Timeline } from "./components/Timeline";
import { NavLateral } from "./components/NavLateral";

function App() {
  return (
    <>
      <NavLateral/>
      <main className="main-section">
        <CrearTweet/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
        <Timeline/>
      </main>

    </>
  );
}

export default App;
