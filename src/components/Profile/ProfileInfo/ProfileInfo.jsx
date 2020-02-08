import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile ) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://i.ytimg.com/vi/Co_gby7hi3U/maxresdefault.jpg' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar/"/>
                avatar + desc
            </div>
        </div>
    )
};

export default ProfileInfo;