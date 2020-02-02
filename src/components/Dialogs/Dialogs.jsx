import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Andrey</div>
                <div className={`${s.dialog} ${s.active}`}>Martin</div>
                <div className={s.dialog}>Juchara</div>
                <div className={s.dialog}>Another Person</div>
                <div className={s.dialog}>Some Person</div>
                <div className={s.dialog}>Kylo Ren</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello World!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Zabusti</div>
            </div>
        </div>
    )
};

export default Dialogs;