import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://i.ytimg.com/vi/Co_gby7hi3U/maxresdefault.jpg' alt=''/>
            </div>
            <div>
                avatar + desc
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;