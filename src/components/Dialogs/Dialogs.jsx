import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    //data
    let dialogs = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Martin'},
        {id: 3, name: 'Kylo Ren'},
        {id: 4, name: 'Renault Logan'},
        {id: 5, name: 'Another Person'},
        {id: 6, name: 'Inc'},
    ];

    let messages = [
        {id: 1, message: 'Hello World!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Kylo Ren'},
        {id: 4, message: 'Zaboosti'}
    ];

    //components
    let dialogElements = dialogs
        .map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = messages
        .map( message => <Message message={message.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs;