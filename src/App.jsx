import { useState, useEffect } from "react";
import { shop } from "./cookie-array.js";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cps);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function increaseCookies() {
    setCookies(cookies + 1);
  }

  function buyUpgrade(increase, cost) {
    setCps(cps + increase);
    setCookies(cookies - cost);
  }

  return (
    <div>
      <h1>Cookie Clicker Demo</h1>
      <button onClick={increaseCookies}>I am a cookie</button>
      <p>Cookies: {cookies}</p>
      <p>Cookies Per Second (cps): {cps}</p>
      {shop.map(function (upgrade) {
        return (
          <button
            key={upgrade.id}
            onClick={() => buyUpgrade(upgrade.increase, upgrade.cost)}
          >
            {upgrade.name}
          </button>
        );
      })}
    </div>
  );
}
