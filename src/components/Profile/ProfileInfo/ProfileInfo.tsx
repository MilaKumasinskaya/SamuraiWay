import React, {FC} from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
    avatar: string
    description: string
}

const ProfileInfo: FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <div >
                <img src={props.avatar} alt='picture'/>
            </div>
            <div className={s.descriptionBlock}>
                {props.description}
            </div>
        </div>
    )
}

export default ProfileInfo;