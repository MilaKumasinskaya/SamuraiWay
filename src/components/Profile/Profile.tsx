import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    profilePage: ProfilePageType
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo avatar={props.profilePage.profileInfo.avatar} description={props.profilePage.profileInfo.description}/>
            <MyPosts addPost={props.addPost} posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;