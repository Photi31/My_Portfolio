import React from 'react';
import s1 from '../../App.module.css'
import s from './Header.module.css';
import {Navbar} from "../Navbar/Navbar";


export const Header = () => {
    return (
        <div className={s1.container}>
            <header className={s.header}>
                <Navbar/>
            </header>
        </div>

    )
}