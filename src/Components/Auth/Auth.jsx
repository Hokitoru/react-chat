import React, {useRef, useState} from 'react';
import classes from './style.module.scss'

const Auth = ({src, setSrc, login, setLogin, showChat, setShowChat}) => {
    const [showAvatarChanger, setShowAvatarChanger] = useState(false);

    const getUsername = (event) => {
        if(event.key === 'Enter'){
            setLogin(event.target.value);
            setShowAvatarChanger(!showAvatarChanger);
        }
    }

    const getFile = async (event) => {
        const imageAdress = 'http://localhost:3000/user/' + login + '/avatar';
        await fetch(imageAdress, {
            method: 'POST',
            body: event.target.files[0],
        })

        const response = await fetch(imageAdress);
        const result = await response.blob();
        setSrc(URL.createObjectURL(result));
    }

    return (
        <div className={classes.auth}>
            {
                showAvatarChanger ?
                    src ?
                        <div>
                            <img src={src} alt="src"/>
                            <button onClick={() => setShowChat(!showChat)}>Закончить регистрацию</button>
                        </div>
                        :
                        <input className={classes.avatar} type="file" title="" onChange={getFile}/>
                    : <input type="text" onKeyUp={event => getUsername(event)}/>
            }


        </div>
    );
};

export default Auth;