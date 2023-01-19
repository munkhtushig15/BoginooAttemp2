import "../App.css";

const PastHistory = ({ past }) => {
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
      </div>
      <hr />
    </>
  );
};

export default PastHistory;
