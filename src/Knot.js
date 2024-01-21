import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const loginInfo = {
  "name": "yubby kim",
  "email": "john-0904@hotmail.com",
  "password": "yubbykim",
  "phone_number": 6824452890,
  "location": "coquitlam",
  "bio": "i like solar panels"
}

const handleClick = () => {
  console.log("sending request")
  const request = new Request("http://localhost:3000/profiles", {
    method: "get",
    body: JSON.stringify(loginInfo),
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
    }
});

fetch(request)
    .then(res => {
        if (res.status === 201) {
          console.log("successful!")
            return res.json()
        }
    })

    .catch(error => {
        console.log(error);
    });
}


function Onboard() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Onboard!!!!!
        </p>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <Button variant="contained" onClick={handleClick}>Onboard!</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Onboard;
