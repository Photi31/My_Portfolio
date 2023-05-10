import {v1} from "uuid";
import html from './icons/html-icon.svg'
import css from './icons/css-icon.svg'
import scss from './icons/sass-1.svg'
import js from './icons/javascript-1.svg'
import ts from './icons/typescript-2.svg'
import react from './icons/react-icon-29.jpg'
import redux from './icons/redux.svg'
import figma from './icons/figma.svg'
import storybook from './icons/storybook.svg'
import mui from './icons/mui.svg'
import git from './icons/git-icon.svg'
import github from './icons/github.svg'
import ws from './icons/webstorm-icon.svg'
import todo from './photo/todolist.png';
import socialNetwork from './photo/socialNetwork.jpg';

export const store = {
    state: {
        mySkills: [
            {id: v1(), src: `${html}`, title: 'HTML'},
            {id: v1(), src: `${css}`, title: 'CSS'},
            {id: v1(), src: `${scss}`, title: 'Sass/SCSS'},
            {id: v1(), src: `${js}`, title: 'JavaScript'},
            {id: v1(), src: `${ts}`, title: 'TypeScript'},
            {id: v1(), src: `${react}`, title: 'React'},
            {id: v1(), src: `${redux}`, title: 'Redux'},
            {id: v1(), src: `${storybook}`, title: 'Storybook'},
            {id: v1(), src: `${mui}`, title: 'MaterialUI'},
            {id: v1(), src: `${git}`, title: 'Git'},
            {id: v1(), src: `${github}`, title: 'GitHub'},
            {id: v1(), src: `${figma}`, title: 'Figma'},
            {id: v1(), src: `${ws}`, title: 'WebStorm'},
        ],
        myWorks: [
            {
                id: v1(),
                src: `${todo}`,
                title: 'ToDo List',
                description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
                stack: 'Tech stack : HTML , JavaScript, SASS, React'
            },
            {id: v1(), src: `${socialNetwork}`, title: 'Social Network', description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', stack: 'Tech stack : HTML , JavaScript, SASS, React'},
        ]
    }
}