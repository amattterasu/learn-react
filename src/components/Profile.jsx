import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src='https://i.ytimg.com/vi/Co_gby7hi3U/maxresdefault.jpg' alt=''/>
            </div>
            <div>
                avatar + desc
            </div>
            <div>
                Post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                    <div className={s.item}>Post 3</div>
                    <div className={s.item}>Post 3</div>
                </div>
            </div>
        </div>
    )
};

export default Profile;