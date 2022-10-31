import React, {useState} from 'react';
import classes from './style.module.scss'

const MesList = ({login, messageList}) => {


    return (
        <div className={classes.container}>
            <div className={classes.mesList}>
                {
                    messageList.map(elem => <div key={elem.id} className={elem.username === login ? classes.mesListElemPrimary : classes.mesListElemSecondary}>
                        <div>ava</div>
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