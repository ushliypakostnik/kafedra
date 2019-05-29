Express start project with Webpack bundler
==========================================

Сайт рок-группы с радио.


Deploy
------

Установка зависимостей npm packages

    $ npm install

Запуск сервера
--------------

    // navigate to localhost:8080 for local dev
    $ npm start

Cборка
------

Сборка статики для разработки

    $ npm run buildDev

 Сборка статики в продакшен

    $ npm run buildProd

Install webpack && webpack-bundle-analyzer globally for stats to be viewable:

    $ npm i -g webpack webpack-bundle-analyzer
    $ npm run build:stats
    $ npm run view:stats
