import "./App.css";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
