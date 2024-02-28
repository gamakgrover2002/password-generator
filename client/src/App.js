import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [password, Setpassword] = useState("");
  const [arr, Setarr] = useState([]);
  const [length, Setlength] = useState(10);

  const generated = useRef(0);

  const senddata = async () => {
    try {
      var res = await fetch("https://backend-password-generator.onrender.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          length: length,
        }),
      });
      res = await res.json();
      console.log(res);
      alert(res);
    } catch (err) {
      console.log("error");
    }
  };
  const getLength = (e) => {
    Setlength(e.target.value);
  };
  const getdata = async () => {
    const res = await fetch("https://backend-password-generator.onrender.com/");
    const result = await res.json();

    Setpassword(result);
    Setarr([password, ...arr]);
    generated.current = generated.current + 1;
  };

  return (
    <>
      <div id="container">
        <h1>{password}</h1>
        <br />
        <button id="button1" onClick={getdata}>
          Click to generate Password
        </button>
        <br />
        <input
          value={length}
          onChange={getLength}
          type="number"
          id="length-input"
        ></input>
        <br />
        <button id="button2" onClick={senddata}>
          Set Length
        </button>
        <br />
        <h4>Password generated: {generated.current}</h4>
        <br />
      </div>
      <div id="subcontainer">
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
