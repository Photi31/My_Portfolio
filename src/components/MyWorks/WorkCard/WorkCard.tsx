import React from 'react';
import s2 from '../../MySkils/MySkils.module.css';
import s from '../MyWorks.module.css';
import {WorkType} from "../MyWorks";
import deploy from '../../../icons/link-bold.svg'
import github from '../../../icons/github.svg'


type WorkCardType = {
    state: WorkType
}
export const WorkCard = (props: WorkCardType) => {
    return (
        <div className={s2.item + ' ' + s.item} key={props.state.id}>
            <div className={s.img__container}>
                <a href={'#'}><img alt={`${props.state.title}`} className={s.img} src={props.state.src}/></a>
            </div>
            <div className={s2.item__title + ' ' + s.item__title}>{props.state.title}</div>
            <div className={s2.descr + ' ' + s.descr}>{props.state.description}</div>
            <div className={s.stack}>{props.state.stack}</div>
            <div className={s.links}>
                <div className={s.link}>
                    <a href={'#'}><img alt={'linc deploy'} className={s.link__img} src={deploy}/></a>
                    <div className={s.link__title}>Live Preview</div>
                </div>
                <div className={s.link}>
                    <a href={'#'}><img alt={'github'} className={s.link__img} src={github}/></a>
                    <div className={s.link__title}>View Code</div>
                </div>
            </div>
        </div>


    )
}