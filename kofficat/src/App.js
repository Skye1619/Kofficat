import "./App.css";
import Admin from "./components/Admin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/cofficat" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
