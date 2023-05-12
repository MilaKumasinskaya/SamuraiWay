import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogues/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostType, ProfilePageType, RootStateType, updateNewPostText} from "./redux/state";

type AppPropsType = {
    state: RootStateType,
    addPost: () => void
    updateNewPostText: (newText: string) => void
    // profilePage: ProfilePageType
}

const App = (props: AppPropsType) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={ () => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}


export default App;
