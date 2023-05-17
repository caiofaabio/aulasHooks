import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header/Header";
import UseState from "./pages/1-UseState/UseState";
import UseEffect from "./pages/2-useEffect/UseEffect";
import Hooks from "./pages/0-Hooks/Hooks";
import UseContext from "./pages/3-useContext/UseContext";
import UseReduce from "./pages/4-useReduce/UseReduce";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-6 mb-5">
        <Routes>
          <Route path="/" element={<Hooks />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usereduce" element={<UseReduce />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
