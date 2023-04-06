import React from 'react';
import s1 from '../../App.module.css';
import s from './MySkils.module.css';
import html from '../../icons/html-icon.svg'
import css from '../../icons/css-icon.svg'
import js from '../../icons/javascript-1.svg'
import react from '../../icons/react-icon-29.jpg'


export const MySkils = () => {
    return (
        <div className={s1.container}>
            <div className={s1.blockTitleContainer}>
                <div className={s1.title_container}>
                     <div className={s1.title_fz16 + ' ' + s.subtitle}>Навыки</div>
                </div>
                <div className={s1.title_fz36 + ' ' + s.title}>Что я использую в работе</div>
                <div className={s1.line}></div>
            </div>
            <div className={s.cards}>
                <div className={s.item}>
                    <img alt={'html'} className={s.img} src={`${html}`}/>
                    <div className={s.item__title}>HTML</div>
                    <div className={s.descr}>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.</div>
                </div>
                <div className={s.item}>
                    <img alt={'css'} className={s.img} src={`${css}`}/>
                    <div className={s.item__title}>CSS</div>
                    <div className={s.descr}>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</div>
                </div>
                <div className={s.item}>
                    <img alt={'js'} className={s.img} src={`${js}`}/>
                    <div className={s.item__title}>JavaScript</div>
                    <div className={s.descr}>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.</div>
                </div>
                <div className={s.item}>
                    <img alt={'react'} className={s.img} src={`${react}`}/>
                    <div className={s.item__title}>REACT</div>
                    <div className={s.descr}>Эта библиотека позволяет создавать web-приложения. Можно создавать максимально интерактивный продукт именно под ваши цели.</div>
                </div>
            </div>
        </div>

    )
}