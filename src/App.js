import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {

    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("ws://localhost:8080");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        ws.current.onmessage = (message) => console.log(message);

        const wsCurrent = ws.current;

        return () => {
            wsCurrent.close();
        };
    }, []);



    const sendMes = () => {
        ws.current.send(JSON.stringify({
            type: 'message',
            username: 'siran',
            text: 'hello, world'
        }))
    }


  return (
    <div>
        <button onClick={() => sendMes()}>Отправить</button>
    </div>
  );
}

export default App;
