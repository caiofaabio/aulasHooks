import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header/Header";
import UseState from "./pages/1-UseState/UseState";
import UseEffect from "./pages/2-useEffect/UseEffect";
import Hooks from "./pages/0-Hooks/Hooks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-6">
        <Routes>
          <Route path="/" element={<Hooks />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
