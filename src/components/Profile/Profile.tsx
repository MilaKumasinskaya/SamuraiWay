import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
        <div>
            <img src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042718_14-768x432.jpg' alt='picture'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
        </div>
    );
}

export default Profile;