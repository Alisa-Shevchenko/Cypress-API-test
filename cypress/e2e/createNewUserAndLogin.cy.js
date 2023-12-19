// Таск:

// Створити нового юзера за допомогою API
// Залогінитись створеним юзером чз апі
// Зайти на головну сторінку чз UI, використовуючи cy.visit('') та засетати локал сторедж.
// використати  onBeforeLoad: (contentWindow) => {

//     contentWindow.window.localStorage.setItem('authToken', token)

//    }

// Перевірити чи юзер залогінився на юайці
// Креди для створення юзера, логіну, юрл-кі мають міститись у Cypress.env 
//чи у енв змінних, чи у тестовій даті. Для зручності можна використати faker https://fakerjs.dev/guide/


import { loginViaAPI, createNewUser, userIsLoggedIn } from '../modules/APIHelpers'


describe('create new user and login', () => {

    it('create new user', () => {
        createNewUser()
    })
    it('login', () => {
        loginViaAPI();
        userIsLoggedIn()
    })
})