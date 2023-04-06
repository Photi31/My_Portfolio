import React from 'react';
import s1 from '../../App.module.css';
import s from './MySkils.module.css';
import {Skill} from "./SkillCard/SkillCard";

export type SkillType = {id: string, src: string, title: string, description: string}

type MySkillsProps = {
    state:  SkillType[]
}

export const MySkills = (props: MySkillsProps) => {
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
                {props.state.map(item => <Skill state={item}/>)}
            </div>
        </div>

    )
}