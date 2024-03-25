<span align="center">

# [ElysiaJS](https://elysiajs.com/) Boilerplate

</span>
<span align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-222?style=for-the-badge&logo=typescript&logoColor=007acc)
![Bun](https://img.shields.io/badge/Bun-222?style=for-the-badge&logo=Bun&logoColor=fff)
![Docker](https://img.shields.io/badge/Docker-222?style=for-the-badge&logo=Docker&logoColor=blue)
![Swagger](https://img.shields.io/badge/Swagger-222?style=for-the-badge&logo=Swagger&logoColor=green)

</span>
<span align="center">

![ESLINT](https://img.shields.io/badge/ESLint-555?style=flat-square&logo=eslint&logoColor=fff) ![Prettier](https://img.shields.io/badge/Prettier-555?style=flat-square&logo=prettier&logoColor=fff)

</span>

<span align="center">

Современная, лёгкая и быстрая (декларируется аж в 21 раз) альтернатива **Express.js**, написанная для рантайма **Bun**

</span>

### Топология

```shell
./
├── public (папка для статических файлов)
│   └── views (содержит статичные шаблоны)
│
├── dist (финальная сборка проекта)
│
├── src
│   ├── controllers (набор контроллеров)
│   ├── guards (набор валидаторов)
│   ├── misc (набор утилит, констант и словарей)
│   ├── mutators (набор мутаторов)
│   ├── routes (набор маршрутов)
│   ├── services (набор сервисов)
│   ├── types (описания типов)
│   ├── config.ts (основной файл конфигурации)
│   └── main.ts (основная точка входа)
│
├── tests (набор тестов)
│
└── Containerfile.* (файл контейнера для соответвующего окружения)
```

### Запуск

#### Режим разработки

```shell
bun dev
```

#### Нормальный режим

```shell
bun start
```

Или разверните в соотвевующей директории для композиции и запуска в контейнере описание можно посмотреть в файле **\_compose.example.yml**.

#### В контейнре Docker/Podman

```shell
docker build -t elysia_boilerplate ./ --no-cache
```

```shell
docker run -p 5757:5757 -t -v "$(pwd)/src:/var/www/backend/src" -v "$(pwd)/public:/var/www/backend/public" -e CHOKIDAR_USEPOLLING=true elysia_boilerplate
```

Сборка не требуется, так как **bun** работает с **TypeScript** из коробки.
