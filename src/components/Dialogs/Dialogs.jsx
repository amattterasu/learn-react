import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Andrey" id="1"/>
                <DialogItem name="Martin" id="2"/>
                <DialogItem name="Kylo Ren" id="3"/>
                <DialogItem name="Renault Logan" id="4"/>
                <DialogItem name="Another Person" id="5"/>
                <DialogItem name="Inc" id="6"/>

            </div>
            <div className={s.messages}>
                <Message message={`Hello World!`}/>
                <Message message={`How are you?`}/>
                <Message message={`Zaboosti`}/>
            </div>
        </div>
    )
};

export default Dialogs;