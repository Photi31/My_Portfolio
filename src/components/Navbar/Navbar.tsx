import React from 'react';
import s1 from '../../App.module.css'
import s from './Navbar.module.css';


export const Navbar = () => {
    return (
        <div className={s1.container}>
            <nav className={s.navbar}>
                <ul className={s.list}>
                    <li className={s.item}>Home</li>
                    <li className={s.item}>Tech Stack</li>
                    <li className={s.item}>Projects</li>
                    <li className={s.item}>Contacts</li>
                    <li className={s.item}>About</li>
                </ul>
            </nav>
        </div>

    )
}