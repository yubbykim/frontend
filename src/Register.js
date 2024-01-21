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

function Register() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [bio, setBio] = React.useState("");

  const redirect = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const request = new Request("/profiles", {
      method: "post",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone_number: phone,
        experience: experience,
        bio: bio,
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    fetch(request)
      .then((res) => {
        if (res.status === 201) {
          console.log("successful!");

          // window.location.href = "/welcome";
          return res.json();
        }
      })

      .then((res) => {
        console.log(res._id);
        if (res._id) redirect("/welcome/" + res._id);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleClick}>
          <Stack direction="row" spacing={2} style={{ marginLeft: '180px' }}>
            <TextField
              id="name"
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={2} style={{ marginTop: '10px', marginLeft: '180px' }}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="phone"
              type="number"
              label="Phone Number"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Stack>
          <h2>Which experiences are you into the most?</h2>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              id="experience"
            >
              {" "}
              <Stack direction="row" spacing={2}>
                {/* First row */}
                <FormControlLabel
                  value="Food/Restaurant Exploring"
                  control={<Radio />}
                  name="experience"
                  label="Food/Restaurant Exploring"
                  onChange={(e) => setExperience(e.target.value)}
                />
                <FormControlLabel
                  value="Gaming"
                  control={<Radio />}
                  label="Gaming"
                  name="experience"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* Second row */}
                <FormControlLabel
                  value="Arts & Crafts"
                  control={<Radio />}
                  label="Arts & Crafts"
                  name="experience"
                  onChange={(e) => setExperience(e.target.value)}
                />
                <FormControlLabel style={{ visibility: 'hidden' }} label="" control={<Radio />} />
                <FormControlLabel
                  value="Music & Dancing"
                  control={<Radio />}
                  label="Music & Dancing"
                  name="experience"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </Stack>
            </RadioGroup>
          </FormControl>
          <h2>Bio</h2>
          <TextField
            id="bio"
            type="Bio"
            label="Bio"
            variant="outlined"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <Button style={{backgroundColor: "blue", marginTop: '10px', marginLeft: '15px' }} variant="contained" type="submit">
            Let's Tie the Knot!
          </Button>
        </form>
      </header>
    </div>
  );
}

export default Register;
