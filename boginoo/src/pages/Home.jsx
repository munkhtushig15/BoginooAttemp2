import { useState } from "react";
import axios from "axios";
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
  const [shortUrl, setShortUrl] = useState("");
  const logoInit = () => {
    if (init === false) {
      setInit(true);
    }
    if (expanded === true) {
      setExpanded(false);
    }
  };
  const shorten = async () => {
    const res = await instance.post("/links", {
      url: url,
    });
    setShortUrl(res.data.data.shortUrl);
    if (init === true) {
      setInit(false);
    }
    if (expanded === false) {
      setExpanded(true);
    }
  };
  return (
    <div className="home">
      <header>
        <span className="herhen">Хэрхэн ажилладаг вэ?</span>
        <button className="boginooButtonMini">Нэвтрэх</button>
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
        {!expanded ? (
          <div className="shortenedLinkOne"></div>
        ) : (
          <div className="shortenedLinkTwo">
            <div>
              <p className="originalLink">Өгөгдсөн холбоос:</p>
              <p>{url}</p>
            </div>
            <div>
              <p className="shortenedLink">Богино холбоос:</p>
              <div className="gapMas">
                <span>localhost:3000/{shortUrl}</span>
                <span className="copyThat">Хуулж авах</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p className="creditBlack">Made with ♥️ by Nest Academy</p>
        <p className="creditGray">©boginoo.io 2020</p>
      </footer>
    </div>
  );
};

export default Home;
