import "../App.css";
import { instance } from "../pages/Home";

const PastHistory = ({ past, user }) => {
  const deleteUrlFunction = async () => {
    console.log(user.role);
    if (user.role === "admin") {
      const res = await instance.delete(`/links/${past._id}`, {
        role: user.role,
        _id: past._id
      });
      console.log(res);
    } else {
      console.log("fuck");
    }
  };

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
        <button className="boginooDelete" onClick={deleteUrlFunction}>
          delete
        </button>
      </div>
      <hr />
    </>
  );
};

export default PastHistory;
