import React, {createRef, MouseEventHandler, useRef} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}



const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map((e) => <Post id={e.id} message={e.message} likesCount={e.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
            props.addPost();
    }

    let onChangePost = () => {
        let text = newPostElement.current?.value
        if(text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;