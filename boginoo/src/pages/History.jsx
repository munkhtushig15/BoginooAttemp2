import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import { instance } from './Home';
import PastHistory from '../components/PastHistory';

const History = () => {
    const [history, setHistory] = useState();
    const [init, setInit] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const params = useParams();
    const [id, setId] = useState('');
    const getUser = async () => {
        const res = await instance.get(`/users/${params.email}`);
        setUser(res.data.data);
        setEmail(res.data.data.email);
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
        const res = await instance.post('/links', {
            url: url,
            user_id: id,
            token: JSON.parse(localStorage.getItem('token')),
        });
        console.log(res);
        setShortUrl(res.data.data.shortUrl);
        if (init === true) {
            setInit(false);
        }
        if (expanded === false) {
            setExpanded(true);
        }
    };
    const getHistory = async () => {
        const res = await instance.get(`/links/?limit=3`);
        setHistory(
            res.data.data.map((el) => {
                console.log(el);
                return el;
            }),
        );
        // setHistory(
        //     res.data.data.Link.map((el) => {
        //         return el;
        //     }),
        // );
    };
    const getHistory2 = async () => {
        const res = await instance.get(`/links/?limit=3&skip=3`);
        setHistory(
            res.data.data.map((el) => {
                console.log(el);
                return el;
            }),
        );
    };
    useEffect(() => {
        getUser();
        getHistory();
    }, []);
    return (
        <div className="home">
            <header>
                <span className="herhen">???????????? ?????????????????? ?????</span>
                <Link className="userContainer" to={`/users/${params.email}`}>
                    <span className="user">{email}</span>
                    <img src={require('../images/icon-down.png')} alt="" />
                </Link>
                <Link to="/">
                    <button className="boginooButtonMini">Log Out</button>
                </Link>
            </header>

            <main>
                {!init ? (
                    <img src={require('../images/boginooLogo.png')} alt="" />
                ) : (
                    <img src={require('../images/boginooLogoLong.png')} alt="" />
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
                        ????????????????????
                    </button>
                </div>
                {!expanded ? (
                    <div className="shortenedLinkOne"></div>
                ) : (
                    <div className="shortenedLinkTwo">
                        <div>
                            <p className="originalLink">???????????????? ??????????????:</p>
                            <p>{url}</p>
                        </div>
                        <div>
                            <p className="shortenedLink">???????????? ??????????????:</p>
                            <div className="gapMas">
                                <span>localhost:3000/{shortUrl}</span>
                                <span className="copyThat">?????????? ????????</span>
                            </div>
                        </div>
                    </div>
                )}
                <h2 className="historyH2">????????</h2>
                <div className="history">
                    {history &&
                        history.map((past) => {
                            return <PastHistory key={past._id} past={past} user={user} />;
                        })}
                </div>
                <div className="historyPagination">
                    <button onClick={getHistory}>1</button>
                    <button onClick={getHistory2}>2</button>
                </div>
            </main>

            <footer>
                <p className="creditGreen">Made with ?????? by Nest Academy</p>
                <p className="creditGray">??boginoo.io 2020</p>
            </footer>
        </div>
    );
};

export default History;
