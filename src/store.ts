import {v1} from "uuid";
import html from './icons/html-icon.svg'
import css from './icons/css-icon.svg'
import js from './icons/javascript-1.svg'
import react from './icons/react-icon-29.jpg'

export const store = {
    state: {
        mySkills: [
            {id: v1(), src: `${html}`, title: 'HTML', description: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта.'},
            {id: v1(), src: `${css}`, title: 'CSS', description: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!'},
            {id: v1(), src: `${js}`, title: 'JavaScript', description: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.'},
            {id: v1(), src: `${react}`, title: 'REACT', description: 'Эта библиотека позволяет создавать web-приложения. Можно создавать максимально интерактивный продукт именно под ваши цели.'},
        ],
        myWorks: [
            {
                id: v1(),
                src: "../../../photo/todolist.png",
                title: 'ToDo List',
                description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
                stack: 'Tech stack : HTML , JavaScript, SASS, React'
            },
            {id: v1(), src: "../../photo/socialNetwork.jpg", title: 'Social Network', description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', stack: 'Tech stack : HTML , JavaScript, SASS, React'},
        ]
    }
}