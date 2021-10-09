# React

Это мой первый большой проект для резюме.

npm run dev - запуск сервера.

npm start - запуск клиента.

В итоге должна открыться заглавная страница интернет-магазина.

![alt text](https://github.com/Peterblr/React/blob/master/StartPage.jpg)

Для начала пришлось прикупить ноутбук поновее и помощнее...

Для разработки использовал БД PostgreSQL (https://www.postgresql.org/) и графический клиент для работы с ней pgAdmin 4 (https://www.pgadmin.org/).

Так же понадобилось установить Nod.js (https://nodejs.org/ru/download/) для написания самого кода и Postman (https://www.postman.com/) для тестовой работы с БД.

Писать сам код посчастливилось в чудесной IDE WebShtorm (https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=9641686230&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLWGQnzOaoiJtDRxvOb3w3AhtQPDRYSEMqQWEh6FQI9iLXr0s6wQLDoaAqU_EALw_wcB)
Благо у них есть возможность бесплатно аж целый месяц кодить в ней! Как раз этого времени хватило. Спасибо разработчикам!

После того как все установил, все настроил и везде зарегистрировался, приступил к настройке самой среды разработки и собственно к написанию кода. Вот здесь и вспоминаешь пословицу: чтобы написать программу на Nod.js - нужно половину интеренета скачать!

npm init -y инициализируем проект в терменале.

Скачиваем и устанавливаем половину интернета: 

 npm i express pg pg-hstore sequelize cors dotenv
 npm i -D nodemon
 npm i uuid
 npm i express-fileupload
 npm i jsonwebtoken bcrypt
 npx create-react-app .
 npm i axios react-router-dom mobx mobx-react-lite
 npm install react-bootstrap@next bootstrap@5.1.1
 npm i jwt-decode
 
 Вроде все что нужно для скачивания указал.
 
 Также хочется отметить:
    Sequelize - ORM для работы с БД на Node.js (что б не писать напрямую SQL-запросы)
    Express - framework для написания серверной части на Node.js
    React bootstrap - это графика для фронтэнда (и да, в 5-й части есть отличия по классам, чего стоит mr-2 нужно писать me-2!!!)
    Axios - запросы к серверу
    React-router-dom - навигация
    
Вроде бы все основные моменты указаны, что б можно было спокойно запустить проект.
Ну разве что еще отмечу, что командой в терменале cd server переходим в основную папку для запуска сервера (npm run dev) и cd client для запуска клинтской части (npm start). Ну и не забываем запускать и подключать БД.

P.S. Это учебный проект и в нем есть еще недоработки и недочеты, и столько много букв написал скорее для себя, так же спасибо наставнику utimur.
