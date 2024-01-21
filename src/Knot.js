import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";

import { Link, useParams } from "react-router-dom";

function Knot() {
  const params = useParams();
  const [partner, setPartner] = React.useState("");
  const [number, setNumber] = React.useState("");
  const request = new Request("/profiles/" + params.id, {
    method: "get",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
  fetch(request)
    .then((res) => {
      return res.json();
    })

    .then((res) => {
      console.log(res);
      setPartner(res.name);
      setNumber(res.phone_number);
    })

    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <h1>It's a Knot!</h1>
        <p>
          {partner}
          </p>
          <h1>   </h1>
          <p>
          {number}
        </p>
      </header>
    </div>
  );
}

export default Knot;
