import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

export const instance = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

const Home = () => {
  const [init, setInit] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [url, setUrl] = useState("");
  const logoInit = () => {
    if (init === false) {
      setInit(true);
    }
    if (expanded === true) {
      setExpanded(false);
    }
  };
  const shorten = async () => {
    await instance.post("/links", {
      url: url,
    });
    if (init === true) {
      setInit(true);
    }
    if (expanded === false) {
      setExpanded(false);
    }
    toast.info("Ehleed burtguulne uu!");
  };
  return (
    <>
      <div className="home">
        <ToastContainer />
        <header>
          <span className="herhen">Хэрхэн ажилладаг вэ?</span>
          <Link to={"/login"}>
            <button className="boginooButtonMini">Нэвтрэх</button>
          </Link>
        </header>

        <main>
          {!init ? (
            <img src={require("../images/boginooLogo.png")} alt="" />
          ) : (
            <img src={require("../images/boginooLogoLong.png")} alt="" />
          )}
          <div className="gapMaster">
            <input
              type="text"
              className="boginooInput"
              placeholder="https://www.web-huudas.mn"
              onClick={logoInit}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={shorten} className="boginooButtonMini">
              Богиносгох
            </button>
          </div>
        </main>

        <footer>
          <p className="creditGreen">Made with ♥️ by Nest Academy</p>
          <p className="creditGray">©boginoo.io 2020</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
