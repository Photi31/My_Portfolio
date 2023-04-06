import React from 'react';
import s1 from '../../App.module.css';
import s2 from '../MySkils/MySkils.module.css';

import s from './MyWorks.module.css';
import link from '../../icons/link-bold.svg';
import github from '../../icons/github.svg';

export const MyWorks = () => {
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
                <div className={s2.item + ' ' + s.item}>
                    <div className={s.img + ' ' + s.todo}></div>
                    <div className={s2.item__title}>ToDo List</div>
                    <div className={s2.descr + ' ' + s.descr}>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
                    <div className={s.stack}>Tech stack : HTML , JavaScript, SASS, React</div>
                    <div className={s.links}>
                        <div className={s.link}>
                            <img alt={'linc deploy'} className={s.link__img} src={`${link}`}/>
                            <div className={s.link__title}>Live Preview</div>
                        </div>
                        <div className={s.link}>
                            <img alt={'github'} className={s.link__img} src={`${github}`}/>
                            <div className={s.link__title}>View Code</div>
                        </div>
                    </div>
                </div>
                <div className={s2.item + ' ' + s.item}>
                    <div className={s.img + ' ' + s.social}></div>
                    <div className={s2.item__title}>Social Network</div>
                    <div className={s2.descr + ' ' + s.descr}>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
                    <div className={s.stack}>Tech stack : HTML , JavaScript, SASS, React</div>
                    <div className={s.links}>
                        <div className={s.link}>
                            <img alt={'linc deploy'} className={s.link__img} src={`${link}`}/>
                            <div className={s.link__title}>Live Preview</div>
                        </div>
                        <div className={s.link}>
                            <img alt={'github'} className={s.link__img} src={`${github}`}/>
                            <div className={s.link__title}>View Code</div>
                        </div>
                    </div>
                </div>
                <div className={s2.item + ' ' + s.item}>
                    <div className={s.img + ' ' + s.todo}></div>
                    <div className={s2.item__title}>ToDo List</div>
                    <div className={s2.descr + ' ' + s.descr}>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
                    <div className={s.stack}>Tech stack : HTML , JavaScript, SASS, React</div>
                    <div className={s.links}>
                        <div className={s.link}>
                            <img alt={'linc deploy'} className={s.link__img} src={`${link}`}/>
                            <div className={s.link__title}>Live Preview</div>
                        </div>
                        <div className={s.link}>
                            <img alt={'github'} className={s.link__img} src={`${github}`}/>
                            <div className={s.link__title}>View Code</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}