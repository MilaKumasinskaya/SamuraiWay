import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogs
        .map((e: any) => <DialogItem name={e.name} id={e.id}/>)
    let messagesElements = props.state.messages.map((e: any) => <Message message={e.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;