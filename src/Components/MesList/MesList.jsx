import React, {useEffect, useRef, useState} from 'react';
import classes from './style.module.scss'

const MesList = ({src, login, messageList}) => {
    const [images, setImages] = useState({});



    const getImage = async (username) => {
        const response = await fetch(`http://localhost:3000/user/${username}/avatar`);
        const result = await response.blob();

        setImages(prev => ({...prev, [username]: result}));
    }

    return (
        <div className={classes.container}>
            <div className={classes.mesList}>
                {
                    messageList.map(elem => <div key={elem.id} className={elem.username === login ? classes.mesListElemPrimary : classes.mesListElemSecondary}>
                        <img src={images.hasOwnProperty(elem.username) ? URL.createObjectURL(images[elem.username]) : getImage(elem.username)} alt="ava"/>
                        <div>
                            <h2>{elem.username}</h2>
                            <p>{elem.text}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MesList;