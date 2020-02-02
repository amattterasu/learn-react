import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://i.ytimg.com/vi/Co_gby7hi3U/maxresdefault.jpg' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + desc
            </div>
        </div>
    )
};

export default ProfileInfo;