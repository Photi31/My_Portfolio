import s from "./SocialLinks.module.css";
import github from "../../icons/github.svg";
import telegram from "../../icons/telegram.svg";
import instagram from "../../icons/instagram.svg";
import phone from "../../icons/phone.svg";
import React from "react";


export const SocialLinks = () => {
    return (
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
    )
}