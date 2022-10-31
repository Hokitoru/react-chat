import React, {useRef, useState} from 'react';
import classes from './style.module.scss'

const Auth = ({setLogin, switcher, setSwitcher}) => {

    const getAuth = (event) => {
        if(event.key === 'Enter'){
            setLogin(event.target.value);
            setSwitcher(!switcher);
        }
    }

    return (
        <div className={classes.auth}>
            <div></div>
            <input type="text" onKeyUp={event => getAuth(event)}/>
        </div>
    );
};

export default Auth;