import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {MyWorks} from "./components/MyWorks/MyWorks";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {store} from './store'
import {MySkills} from "./components/MySkils/MySkills";

function App() {
    return (
        <div className={s.App}>
            <div className={s.container}>
                <Header/>
                <Main/>
                <MySkills state={store.state.mySkills}/>
                <MyWorks state={store.state.myWorks}/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
