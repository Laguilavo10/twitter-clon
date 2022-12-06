import { useState, useEffect } from "react";
import "./index.css";
import { CrearTweet } from "./components/CrearTweet";
import { Timeline } from "./components/Timeline";
import { NavLateral } from "./components/NavLateral";
import { useAPI } from "./hooks/useAPI";

function App() {
  const {infoTweet} = useAPI('https://api.breakingbadquotes.xyz/v1/quotes/', 10)
  return (
    <>
      <NavLateral />
      <main className="main-section">
        <CrearTweet />
        {infoTweet ? (
          infoTweet.map((data) => <Timeline data={data} />)
        ) : (
          <p>loading</p>
        )}
      </main>
    </>
  );
}

export default App;
