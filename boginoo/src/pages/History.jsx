import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { instance } from "./Home";

const History = () => {
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
    });
    setShortUrl(res.data.data.shortUrl);
    if (init === true) {
      setInit(false);
    }
    if (expanded === false) {
      setExpanded(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="home">
      <header>
        <span className="herhen">Хэрхэн ажилладаг вэ?</span>
        <button className="boginooButtonMini">{email}</button>
      </header>

      <main>
        <img src={require("../images/boginooLogo.png")} alt="" />
      </main>

      <footer>
        <p className="creditBlack">Made with ♥️ by Nest Academy</p>
        <p className="creditGray">©boginoo.io 2020</p>
      </footer>
    </div>
  );
};

export default History;
