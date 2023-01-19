import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { instance } from "./Home";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const SignUp = async () => {
    try {
      await instance.post("/users", {
        password: password,
        email: email,
        repassword: repassword,
      });
      toast.success("Successfully signed up");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="login">
      <ToastContainer />
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>
          <button onClick={SignUp} className="boginooButton">
            Бүртгүүлэх
          </button>
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
