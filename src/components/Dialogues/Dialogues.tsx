import React from 'react';
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props:any) => {
    let path = "/dialogues" + props.id;
    return (
        <div className={s.dialogue + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:any) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogues = (props: any) => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name="Vika" id="1"/>
                <DialogueItem name="Sasha" id="2"/>
                <DialogueItem name="Masha" id="3"/>
                <DialogueItem name="Lena" id="4"/>
                <DialogueItem name="Anna" id="5"/>
                <DialogueItem name="Viktor" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Hi"/>
                <Message message="Nice"/>
                <Message message="Hi"/>
            </div>
        </div>
    )
}

export default Dialogues;