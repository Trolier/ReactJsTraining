import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
let count = 0;
const AddOne = () => count++;
const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>count :</h2>
    <h2>{count}</h2>
    <input type="button" value="+" onClick={AddOne} />
  </div>
);

render(<App />, document.getElementById("root"));
