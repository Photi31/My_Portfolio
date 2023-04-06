import React from 'react';
import s1 from '../../App.module.css';
import s from './Contacts.module.css';
import github from '../../icons/github.svg';
import telegram from '../../icons/telegram.svg';
import instagram from '../../icons/instagram.svg';
import phone from '../../icons/phone.svg';


export const Contacts = () => {
    return (
        <div className={s1.container}>
            <div className={s1.blockTitleContainer}>
                <div className={s1.title_container}>
                     <div className={s1.title_fz16 + ' ' + s.subtitle}>Контакты</div>
                </div>
                <div className={s1.title_fz36 + ' ' + s.title}>Свяжитесь со мной</div>
                <div className={s1.line}></div>
            </div>
            <div className={s.contacts}>
                <div className={s.photo}/>
                <div className={s.contact__social}>
                    <h4 className={s.contact__title}>Вы можете связаться со мной любым удобным для вас способом:</h4>
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
                    <form action="#" className={s.form}>
                        <h4 className={s.form__title}>Или оставьте ваши данные и я сама вам напишу:</h4>
                        <div className={s.form__input}>
                            <div className={s.form__block}>
                                <div className={s.form__name}>Ваше имя</div>
                                <input className={s.input__name} name="name" required type="text"/>
                            </div>
                            <div className={s.form__block}>
                                <div className={s.form__name}>Ваша почта</div>
                                <input className={s.input__mail} name="email" required type="email"/>
                            </div>
                            <div className={s.form__block_big}>
                                <div className={s.form__name}>Ваше сообщение</div>
                                <textarea className={s.input__area} name="messege"></textarea>
                            </div>
                        </div>
                        <div className={s.form__btns}>
                            <button className={s.button}>Отправить сообщение</button>
                            {/*<div className={s.form__policy}>*/}
                            {/*    <input type="checkbox" required/>*/}
                            {/*    <span>Я согласен(а) с <a href="#">политикой конфиденциальности</a></span>*/}
                            {/*</div>*/}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}