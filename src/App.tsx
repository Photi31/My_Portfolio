import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {MySkils} from "./components/MySkils/MySkils";
import {MyWorks} from "./components/MyWorks/MyWorks";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <MySkils/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
