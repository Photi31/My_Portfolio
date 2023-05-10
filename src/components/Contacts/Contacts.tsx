import React from 'react';
import s1 from '../../App.module.css';
import s from './Contacts.module.css';
import {SocialLinks} from "../SocialLinks/SocialLinks";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock} id='contacts'>
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
                    <SocialLinks/>
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}