import React from 'react';
import s1 from '../../App.module.css'
import s from './Main.module.css';


export const Main = () => {
    return (
        <div className={s.mainBlock} id='main'>
            <main className={s.main}>
                <div className={s.text}>
                    <div className={s1.title_fz24 + ' ' + s.subtitle}>Меня зовут Светлана Немова</div>
                    <div className={s1.title_fz48 + ' ' + s.title}>Я Frontend-разработчик</div>
                </div>
            </main>
        </div>
    )
}