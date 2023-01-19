import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Links from "./pages/Links";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path=":shortId" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
