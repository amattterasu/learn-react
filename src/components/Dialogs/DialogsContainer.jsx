import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

//data from state
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

//hoc
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,{updateNewMessageBody, sendMessage})(AuthRedirectComponent);

export default DialogsContainer;