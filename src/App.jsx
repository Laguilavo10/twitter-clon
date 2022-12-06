import { useState, useEffect } from "react";
import "./index.css";
import { CrearTweet } from "./components/CrearTweet";
import { Timeline } from "./components/Timeline";
import { NavLateral } from "./components/NavLateral";

function App() {
  const [infoTweet, setInfoTweet] = useState(null);

  useEffect(() => {
    let catidadTweets = 10;
    const API_URL = `https://api.breakingbadquotes.xyz/v1/quotes/${catidadTweets}`;

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setInfoTweet(data));
  }, []);

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
