import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Links from "./pages/Links";
import HomeLogged from "./pages/HomeLogged";
import History from "./pages/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:shortId" element={<Links />} />
          <Route path="/users/:email/history" element={<History/>}/>
          <Route path="/users/:email" element={<HomeLogged />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
