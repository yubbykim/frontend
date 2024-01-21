import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useParams } from "react-router-dom";

function Welcome() {
  const params = useParams();

  const styles = {
    heading: {
      fontSize: '70px',
      color: 'black',
      textAlign: 'right',
      marginBottom: '0.0000006em'
    },
    paragraph: {
      fontSize: '120px',
      color: 'blue',
    marginBottom: '0.005em'
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 style={styles.heading}>WELCOME!!!!!</h1>
        <p style={styles.paragraph}>To Knot</p>

        <Link to={"/activity/" + params.id}> == </Link>
      </div>
    </div>
  );
}

export default Welcome;
