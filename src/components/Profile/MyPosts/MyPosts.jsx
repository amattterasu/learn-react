import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    //data
    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 54},
        {id: 2, message: 'How are you?', likeCount: 42},
        {id: 3, message: 'It\'s my first post!', likeCount: 98},
        {id: 4, message: 'Zaboosti', likeCount: 24}
    ];

    //components

    let postsElement = posts
        .map( post => <Post message={post.message} likeCount={post.likeCount}/> );

    return (
        <div className={s.postsBlock}>
           <h3>Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    )
};

export default MyPosts;