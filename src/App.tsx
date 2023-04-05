import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {MySkils} from "./components/MySkils/MySkils";
import {MyWorks} from "./components/MyWorks/MyWorks";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <MySkils/>
            <MyWorks/>
        </div>
    );
}

export default App;
