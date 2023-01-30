import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { instance } from "../pages/Home";

const PastHistory = ({ past }) => {
  const params = useParams();
  const [admin, setAdmin] = useState("");
  const deleteUrlFunction = async () => {
    const res = await instance.delete(`/links/${past._id}`, {
      role: admin,
    });
    console.log(res);
  };
  const getHistory = async () => {
    const res = await instance.get(`/users/${params.email}`);
    console.log(res.data.data.role);
    setAdmin(res.data.data.role);
  };
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <>
      <div className="pastHistory">
        <div className="given">
          <p className="creditGray">Өгөгдсөн холбоос:</p>
          <p className="creditBlack">{past.url}</p>
        </div>
        <div className="shortUrl">
          <p className="creditGray">Богино холбоос:</p>
          <p className="creditBlack">localhost:3000/{past.shortUrl}</p>
        </div>
        <button onClick={deleteUrlFunction}>delete</button>
      </div>
      <hr />
    </>
  );
};

export default PastHistory;
