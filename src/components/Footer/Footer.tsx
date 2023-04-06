import React from 'react';
import s1 from '../../App.module.css';
import s from './Footer.module.css';
import github from '../../icons/github.svg';
import telegram from '../../icons/telegram.svg';
import instagram from '../../icons/instagram.svg';
import phone from "../../icons/phone.svg";


export const Footer = () => {
    return (
        <div className={s1.container + ' ' + s.container}>
            <div className={s.line}></div>
            <div className={s.name}>Светлана Немова</div>
            <div className={s.contact__social}>
                <div className={s.social__link}>
                    <a href="#">
                        <img alt={'github'} className={s.social__link_img} src={`${github}`}/>
                    </a>
                    <a href="#">
                        <img alt={'telegram'} className={s.social__link_img} src={`${telegram}`}/>
                    </a>
                    <a href="#">
                        <img alt={'instagram'} className={s.social__link_img} src={`${instagram}`}/>
                    </a>
                    <a href="#">
                        <img alt={'phone'} className={s.social__link_img} src={`${phone}`}/>
                    </a>
                </div>
            </div>
            <div className={s.policy}>@2023 Все права защищены.</div>
        </div>
    )
}