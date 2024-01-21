import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useParams } from "react-router-dom";

function Welcome() {
  const params = useParams();
  return (
    <div className="App">
      <div className="App-header">
        <h1>WELCOME!!!!!</h1>
        <p>To Knot!!!</p>

        <Link to={"/activity/" + params.id}> == </Link>
      </div>
    </div>
  );
}

export default Welcome;
