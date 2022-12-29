import React from "react";

export default function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>CLICK ME</span>
        </div>
      </div>
      <div className={(active === title ? "show BuAçikDemek" : "degerTRUE ") + " accordionContent BuKapaliDemek"}>
        <div className="container">
          <p>
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20
            lorem20 lorem20 lorem20
          </p>
        </div>
      </div>
    </div>
  );
}
