import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useParams } from "react-router-dom";

function Submitted() {
  const params = useParams();
  return (
    <div className="App">
      <div className="App-header">
        <h1>Submitted!!!!!</h1>
        <p>To Knot!!!</p>

        <Link to={"/activity/" + params.id}> &lt; </Link>
      </div>
    </div>
  );
}

export default Submitted;
