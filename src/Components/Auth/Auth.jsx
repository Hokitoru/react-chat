import React, {useRef, useState} from 'react';
import classes from './style.module.scss'

const Auth = ({src, setSrc, setLogin, showChat, setShowChat}) => {
    const getAuth = (event) => {
        if(event.key === 'Enter'){
            setLogin(event.target.value);
            setShowChat(!showChat);
        }
    }

    const getFile = async (event) => {
        await fetch(`http://localhost:3000/user/Hokitoru/avatar`, {
            method: 'POST',
            body: event.target.files[0],
        })

        const response = await fetch(`http://localhost:3000/user/Hokitoru/avatar`);
        const result = await response.blob();
        setSrc(URL.createObjectURL(result));
    }

    return (
        <div className={classes.auth}>
            {
                src ? <img src={src} alt="src"/> : <input className={classes.avatar} type="file" title="" onChange={getFile}/>
            }

            <input type="text" onKeyUp={event => getAuth(event)}/>
        </div>
    );
};

export default Auth;