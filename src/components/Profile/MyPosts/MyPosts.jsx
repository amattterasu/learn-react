import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={`newPostText`} component={Textarea} validate={[required, maxLength10]} placeholder={`Post message`} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

class MyPosts extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }

    render() {

        let postsElement = this.props.posts
            .map(post => <Post message={post.message} likeCount={post.likeCount}/>);

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        };

        return (
            <div className={s.postsBlock}>
                <h3>Posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        )
    }
}

export default MyPosts;