import { Link } from "react-router-dom";
import "../App.css";

const Forgot = () => {
  return (
    <div className="forgot">
      <header>
        <span className="herhen">Хэрхэн ажилладаг вэ?</span>
      </header>

      <main>
        <div className="loginMainContainer">
          <Link to={"/"}>
            <img src={require("../images/boginooLogo.png")} alt="" />
          </Link>
          <h2>Нууц үг сэргээх</h2>
          <span className="textAlin">Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</span>
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
          <button className="boginooButton">Илгээх</button>
        </div>
      </main>

      <footer>
        <p className="creditBlack">Made with ♥️ by Nest Academy</p>
        <p className="creditGray">©boginoo.io 2020</p>
      </footer>
    </div>
  );
};

export default Forgot;
