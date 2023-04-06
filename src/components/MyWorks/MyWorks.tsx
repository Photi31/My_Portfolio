import React from 'react';
import s1 from '../../App.module.css';
import s2 from '../MySkils/MySkils.module.css';
import s from './MyWorks.module.css';
import {WorkCard} from "./WorkCard/WorkCard";

export type WorkType = {id: string, src: string, title: string, description: string, stack: string, deploy?: string, github?: string}

type MyWorksType = {
    state: WorkType[]
}

export const MyWorks = (props: MyWorksType) => {
    return (
        <div className={s1.container}>
            <div className={s1.blockTitleContainer}>
                <div className={s1.title_container}>
                    <div className={s1.title_fz16 + ' ' + s.subtitle}>Портфолио</div>
                </div>
                <div className={s1.title_fz36 + ' ' + s.title}>Мои работы</div>
                <div className={s1.line}></div>
            </div>
            <div className={s2.cards}>
                {props.state.map(item => <WorkCard state={item}/>)}
            </div>
        </div>

    )
}