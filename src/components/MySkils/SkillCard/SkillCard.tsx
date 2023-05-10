import React from 'react';
import s from '../MySkils.module.css';
import {SkillType} from "../MySkills";

type SkillCardType = {
    state: SkillType
}

export const Skill = (props: SkillCardType) => {
    return (
        <div className={s.item} key={props.state.id}>
            <div className={s.img}>
                <img alt={'html'}  src={props.state.src}/>
            </div>
            <div className={s.item__title}>{props.state.title}</div>
        </div>

    )
}