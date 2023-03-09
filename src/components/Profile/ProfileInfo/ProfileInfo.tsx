import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042718_14-768x432.jpg' alt='picture'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;