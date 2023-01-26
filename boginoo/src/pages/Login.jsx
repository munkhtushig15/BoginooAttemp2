import { Link } from "react-router-dom";
import { useState } from "react";
import { instance } from "./Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import Loading from "../components/Loading";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = async () => {
    setIsLoading(true);
    try {
      const res = await instance.post("/users/login", {
        password: password,
        email: email,
      });
      console.log(res);
      window.location.replace(`users/${res.data.data.email}`);
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
      console.log(res.data.token);
      toast.success("successfully logged in");
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
              <h2>Нэвтрэх</h2>
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
              <div className="checkBoxContainer">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span className="copyThat">Намайг сана</span>
                </div>
                <Link to={`/forgot`}>
                  <span className="copyThat">Нууц үгээ мартсан</span>
                </Link>
              </div>
              <button onClick={Login} className="boginooButton">
                Нэвтрэх
              </button>
              <Link to={"/signup"}>
                <span className="copyThat">
                  Шинэ хэрэглэгч бол энд дарна уу?
                </span>
              </Link>
            </div>
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

export default Login;
