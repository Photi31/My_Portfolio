import React from 'react';
import s2 from '../../MySkils/MySkils.module.css';
import s from '../MyWorks.module.css';
import {WorkType} from "../MyWorks";
import deploy from '../../../icons/link-bold.svg'
import github from '../../../icons/github.svg'
import todo from '../../../photo/todolist.png'
import social from '../../../photo/socialNetwork.jpg'


type WorkCardType = {
    state: WorkType
}
//{background: `url(${props.state.src}) center 50%/cover no-repeat;`}
export const WorkCard = (props: WorkCardType) => {
    return (
        <div className={s2.item + ' ' + s.item} key={props.state.id}>
            <div className={s.img}>
                <img src={props.state.title === 'ToDo List' ? todo : social}/>
            </div>
            <div className={s2.item__title}>{props.state.title}</div>
            <div className={s2.descr + ' ' + s.descr}>{props.state.description}</div>
            <div className={s.stack}>{props.state.stack}</div>
            <div className={s.links}>
                <div className={s.link}>
                    <img alt={'linc deploy'} className={s.link__img} src={deploy}/>
                    <div className={s.link__title}>Live Preview</div>
                </div>
                <div className={s.link}>
                    <img alt={'github'} className={s.link__img} src={github}/>
                    <div className={s.link__title}>View Code</div>
                </div>
            </div>
        </div>


    )
}