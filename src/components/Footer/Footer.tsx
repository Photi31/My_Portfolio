import React from 'react';
import s1 from '../../App.module.css';
import s from './Footer.module.css';
import {SocialLinks} from "../SocialLinks/SocialLinks";


export const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s1.dividedLine}></div>
            <div className={s.name}>Светлана Немова</div>
            <div className={s.contact__social}>
                <SocialLinks/>
            </div>
            <div className={s.policy}>@2023 Все права защищены.</div>
        </div>
    )
}