import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [password, Setpassword] = useState("");
  const [arr, Setarr] = useState([]);
  const generated = useRef(0);
  const getdata = async () => {
    const res = await fetch("http://localhost:4000/");
    const result = await res.json();
    console.log(result);
    Setpassword(result);
    Setarr([...arr, password]);
  };
  useEffect(() => {
    generated.current = generated.current + 1;
  });
  return (
    <>
      <h1>{password}</h1>
      <br />
      <button onClick={getdata}>Click to generate Password</button>
      <br />
      <h4>Password generated: {generated.current}</h4>
      <br />
      <div id="container">
        {arr.map((e) => {
          return (
            <div id="child">
              <p>{e}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
