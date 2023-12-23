import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestGrid from "./pages/TestGrid";
import TestFlex from "./pages/TestFlex";
import TestSelectPage from "./pages/TestSelectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test-grid" Component={TestGrid} />
        <Route path="/test-flex" Component={TestFlex} />
        <Route path="/test-select" Component={TestSelectPage} />
      </Routes>
    </Router>
  );
}

export default App;
