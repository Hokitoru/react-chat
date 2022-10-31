import {useEffect, useRef, useState} from "react";
import Auth from "./Components/Auth/Auth";
import classes from './style.module.scss'
import auth from "./Components/Auth/Auth";
import Header from "./Components/Header/Header";
import MesList from './Components/MesList/MesList'
import InputMes from "./Components/InputMes/InputMes";

function App() {
    const [messageList, setMessageList] = useState([]);
    const [login, setLogin] = useState('');
    const [showChat, setShowChat] = useState(false);
    const ws = useRef(null);
    const [src, setSrc] = useState('');

    const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);


    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:8080");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        ws.current.onmessage = (message) => {
            console.log(messageList);
            const obj = JSON.parse(message.data);
            obj.id = generateId();
            setMessageList(prev => ([...prev, obj]))
        };

        const wsCurrent = ws.current;

        return () => {
            wsCurrent.close();
        };
    }, []);

    console.log(messageList);

    const sendMes = (login, message) => {
        ws.current.send(JSON.stringify({
            type: 'message',
            username: login,
            text: message,
        }))
    }

  return (
    <div>
        <Header></Header>
        <div className={classes.content}>
            {
                showChat ?
                    <div className={classes.chat}>
                        <MesList login={login} messageList={messageList}></MesList>
                        <InputMes login={login} sendMes={(login, message) => sendMes(login, message)}></InputMes>
                    </div>
                    :
                    <Auth src={src} setSrc={setSrc} setLogin={setLogin} switcher={showChat} setSwitcher={setShowChat}></Auth>
            }
        </div>
    </div>
  );
}

export default App;
