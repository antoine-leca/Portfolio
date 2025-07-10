import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;