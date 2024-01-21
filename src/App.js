import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Welcome from "./Welcome";
import Activity from "./Activity";
import Knot from "./Knot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/welcome/:id" element={<Welcome />} />
        <Route path="/activity/:id" element={<Activity />} />
        <Route path="/knot" element={<Knot />} />
      </Routes>
    </BrowserRouter>
  );
}
