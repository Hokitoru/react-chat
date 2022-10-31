import React from 'react';
import classes from './style.module.scss'

const InputMes = ({login, sendMes}) => {

    const sendMessage = (event) => {
        if(event.key === 'Enter'){
            sendMes(login, event.target.value);
            event.target.value = '';
        }
    }

    return (
        <div className={classes.inputMes}>
            <input type="text" onKeyUp={event => {sendMessage(event)}}/>
        </div>
    );
};

export default InputMes;