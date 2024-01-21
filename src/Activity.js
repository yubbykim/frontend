import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

function Activity() {
  const params = useParams();
  const [interest, setInterest] = React.useState("");
  const [skill, setSkill] = React.useState("");

  const redirect = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const request = new Request("/activities", {
      method: "post",
      body: JSON.stringify({
        activity_name: interest,
        required_skills: skill,
        profileId: params.id,
      }),
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
        console.log(res)
        if (res.matchedProfile) redirect("/Knot/" + res.matchedProfile._id);
        else redirect("/submitted/" + res.profileId);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleClick}>
          <h1>What are you looking for?</h1>
          <TextField
            id="interest"
            label="interest"
            variant="outlined"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              id="skill"
            >
              {" "}
              <Stack direction="row">
                <FormControlLabel
                  value="Beginner"
                  control={<Radio />}
                  name="skill"
                  label="Beginner"
                  onChange={(e) => setSkill(e.target.value)}
                />
                <FormControlLabel
                  value="Intermediate"
                  control={<Radio />}
                  label="Intermediate"
                  name="skill"
                  onChange={(e) => setSkill(e.target.value)}
                />
                <FormControlLabel
                  value="Advanced"
                  control={<Radio />}
                  label="Advanced"
                  name="skill"
                  onChange={(e) => setSkill(e.target.value)}
                />
              </Stack>
            </RadioGroup>
          </FormControl>

          <Button variant="contained" type="submit">
            Submit Tie Request!
          </Button>
        </form>
      </header>
    </div>
  );
}

export default Activity;
