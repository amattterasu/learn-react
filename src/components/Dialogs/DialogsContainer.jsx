import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//data from state
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

// callback
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },             // callback
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;