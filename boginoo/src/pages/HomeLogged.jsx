import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { instance } from "./Home";
import Loading from "../components/Loading";

const HomeLogged = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [init, setInit] = useState(false);
  const [id, setId] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();
  const getUser = async () => {
    setIsLoading(true);
    const res = await instance.get(`/users/${params.email}`);
    setEmail(res.data.data.email);
    setIsLoading(false);
    console.log(res);
    setId(res.data.data.id);
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
    setIsLoading(true);
    const res = await instance.post("/links", {
      url: url,
      user_id: id,
      token: JSON.parse(localStorage.getItem("token")),
    });
    console.log(res);
    setShortUrl(res.data.data.shortUrl);
    if (init === true) {
      setInit(false);
    }
    if (expanded === false) {
      setExpanded(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="home">
          <header>
            <span className="herhen">Хэрхэн ажилладаг вэ?</span>
            <Link to="history">
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
          </main>

          <footer>
            <p className="creditBlack">Made with ♥️ by Nest Academy</p>
            <p className="creditGray">©boginoo.io 2020</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default HomeLogged;
