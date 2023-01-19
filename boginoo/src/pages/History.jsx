import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { instance } from "./Home";
import PastHistory from "../components/PastHistory";

const History = () => {
  const [history, setHistory] = useState();
  const [init, setInit] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();
  const getUser = async () => {
    const res = await instance.get(`/users/${params.email}`);

    setEmail(res.data.data.email);
  };
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
      token: JSON.parse(localStorage.getItem("token")),
    });
    setShortUrl(res.data.data.shortUrl);
    if (init === true) {
      setInit(false);
    }
    if (expanded === false) {
      setExpanded(true);
    }
  };
  const getHistory = async () => {
    const res = await instance.get("/links");
    setHistory(res.data.data);
  };

  useEffect(() => {
    getUser();
    getHistory();
  }, [history]);
  return (
    <div className="home">
      <header>
        <span className="herhen">Хэрхэн ажилладаг вэ?</span>
        <Link to={`/users/${params.email}`}>
          <button className="boginooButtonMini">{email}</button>
        </Link>
        <Link to="/">
          <button className="boginooButtonMini">Log Out</button>
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
        <h2 className="historyH2">Түүх</h2>
        <div className="history">
          {history &&
            history.map((past) => {
              return <PastHistory key={past._id} past={past} />;
            })}
        </div>
      </main>

      <footer>
        <p className="creditBlack">Made with ♥️ by Nest Academy</p>
        <p className="creditGray">©boginoo.io 2020</p>
      </footer>
    </div>
  );
};

export default History;
