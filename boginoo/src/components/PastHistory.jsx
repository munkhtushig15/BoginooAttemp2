import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { instance } from '../pages/Home';

const PastHistory = ({ past, user }) => {
    const deleteUrlFunction = async () => {
        if (user.role === 'admin') {
            await instance.delete(`/links/${past._id}`, {
                role: user.role,
                _id: past._id,
            });
        } else {
            toast.info('Admin bolj ustgana u!');
        }
    };

    return (
        <>
            <ToastContainer />
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
