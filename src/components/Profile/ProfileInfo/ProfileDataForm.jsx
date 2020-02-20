import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return  <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {   error &&
            <div className={styles.formSummaryError}>
                {error}
            </div>
        }
        <div>
            <b>Full name</b>: {createField('Full Name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My professional skills</b>: {createField('professional', 'lookingForAJobDescription', [], Textarea)}
        </div>

        <div>
            <b>About me</b>: {createField('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}</b>: {createField(key, "contacts." + key, [], Input)}
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'profileEdit'})(ProfileDataForm);

export default ProfileDataFormReduxForm;