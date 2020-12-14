import React from "react";
import "./browser.scss";

export default function Browser({name, image, description}) {
  return (
    <section id={name.toLowerCase()}>
        <img src={image}/>
        <h4>{name}</h4>
        <p>{description}</p>
    </section>
  );
}