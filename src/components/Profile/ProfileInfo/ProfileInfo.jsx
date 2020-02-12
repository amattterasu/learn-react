import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile ) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://i.ytimg.com/vi/Co_gby7hi3U/maxresdefault.jpg' alt=''/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar"/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;