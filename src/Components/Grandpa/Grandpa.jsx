import React, { createContext, useContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
export const RingContext = createContext("gold");
const Grandpa = () => {
  const ring = "diamond";
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <RingContext.Provider value="Golden Ring">
        <section className="flex ">
          <Father ring={ring}></Father>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </RingContext.Provider>
    </div>
  );
};

export default Grandpa;
