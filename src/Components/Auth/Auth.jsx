import React, {useRef, useState} from 'react';
import classes from './style.module.scss'

const Auth = ({setLogin, switcher, setSwitcher}) => {

    const getAuth = (event) => {
        if(event.key === 'Enter'){
            setLogin(event.target.value);
            setSwitcher(!switcher);
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
            <input type="file" onChange={getFile}/>
            <img src={src} alt="src"/>
            <input type="text" onKeyUp={event => getAuth(event)}/>
        </div>
    );
};

export default Auth;