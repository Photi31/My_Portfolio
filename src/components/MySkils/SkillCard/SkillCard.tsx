import React from 'react';
import s from '../MySkils.module.css';
import {SkillType} from "../MySkills";

type SkillCardType = {
    state: SkillType
}

export const Skill = (props: SkillCardType) => {
    return (
        <div className={s.item} key={props.state.id}>
            <img alt={'html'} className={s.img} src={props.state.src}/>
            <div className={s.item__title}>{props.state.title}</div>
            <div className={s.descr}>{props.state.description}</div>
        </div>

    )
}