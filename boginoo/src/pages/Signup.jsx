import { Link } from "react-router-dom";
import "../App.css";

const Signup = () => {
  return (
    <div className="login">
      <header>
        <span className="herhen">Хэрхэн ажилладаг вэ?</span>
      </header>

      <main>
        <div className="loginMainContainer">
          <Link to={"/"}>
            <img src={require("../images/boginooLogo.png")} alt="" />
          </Link>
          <h2>Бүртгүүлэх</h2>
          <div className="loginInps">
            <label className="boginooLabel" htmlFor="">
              Цахим хаяг
            </label>
            <input
              placeholder="name@mail.domain"
              type="text"
              className="boginooInputLogin"
            />
          </div>
          <div className="loginInps">
            <label className="boginooLabel" htmlFor="">
              Нууц үг
            </label>
            <input
              placeholder="••••••••••"
              type="password"
              className="boginooInputLogin"
            />
          </div>
          <div className="loginInps">
            <label className="boginooLabel" htmlFor="">
              Нууц үгээ давтна уу?
            </label>
            <input
              placeholder="••••••••••"
              type="password"
              className="boginooInputLogin"
            />
          </div>
          <button className="boginooButton">Бүртгүүлэх</button>
        </div>
      </main>

      <footer>
        <p className="creditBlack">Made with ♥️ by Nest Academy</p>
        <p className="creditGray">©boginoo.io 2020</p>
      </footer>
    </div>
  );
};

export default Signup;
