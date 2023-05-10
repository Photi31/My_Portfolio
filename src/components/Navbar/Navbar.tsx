import React from 'react';
import s1 from '../../App.module.css'
import s from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={s.item}><a href={'#main'}>Home</a></li>
                <li className={s.item}><a href={'#mySkills'}>Tech Stack</a></li>
                <li className={s.item}><a href={'#myWorks'}>Projects</a></li>
                <li className={s.item}><a href={'#contacts'}>Contacts</a></li>
            </ul>
        </nav>
    )
}