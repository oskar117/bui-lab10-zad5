import React from "react";
import Browser from "./Browser";
import "./browsers.scss";

export default function Browsers({browsers}) {
  return (
    <article>
        <header>
            <h1>Popular web browsers</h1>
        </header>
        <div className="browsers">
            {browsers.map((browser, i) => (
                <Browser key={i} {...browser} />
            ))}
        </div>
    </article>
  );
}