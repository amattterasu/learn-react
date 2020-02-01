import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://media.wired.com/photos/5e1e646743940d0008009167/master/pass/Science_Cats-84873657.jpg" alt=""/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
};

export default Post;