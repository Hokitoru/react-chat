import './App.css';
import {useState} from "react";

function App() {
    let socket = new WebSocket("ws://localhost:8080");

    socket.onMessage = (event) => console.log(event);

    socket.send(JSON.stringify({
        type: 'message',
        username: 'siran',
        text: 'hello, world'
    }))

  return (
    <div>
        <button>Отправить</button>
    </div>
  );
}

export default App;
