<span align="center">

<svg widht="128" height="128" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="a"/><g id="b"/><g id="c"/><g id="d"/><g id="e"/><g id="f"/><g id="g"/><g id="h"/><g id="i"/><g id="j"/><g id="k"/><g id="l"/><g id="m"/><g id="n"/><g id="o"/><g id="p"><path d="M7.45,21.19l9.65-5.88L7.56,5.16c-.16,.12-.27,.31-.27,.54v14.64c0,.29,.06,.58,.16,.85h0Z" fill="#fca65c" id="q"/><path d="M31.17,5.16l-9.54,10.15,9.81,6.04V5.69c0-.22-.11-.41-.27-.53Z" fill="#fca65c" id="r"/><path d="M7.56,5.16l9.21,9.8-1.95,1.75-3.16,1.94L7.56,5.16Z" fill="#f5934a" id="s"/><path d="M31.17,5.16l-9.21,9.8,1.95,1.75,3.16,1.94,4.1-13.5Z" fill="#f5934a" id="t"/><path d="M8.05,5.01c-.18-.02-.35,.04-.49,.15l5.77,10.15h12.07l5.77-10.15c-.18-.15-.43-.21-.67-.11l-11.13,4.22L8.23,5.05c-.06-.02-.12-.04-.18-.04h0Z" fill="#feb87e" id="u"/><path d="M12.78,26.84v26.44c0,.26,.05,.52,.14,.77l13.81-10.57,4.71-22.13-18.65,5.49Z" fill="#f0f4f6" id="v"/><path d="M31.44,21.35L12.78,44.91V26.84l18.65-5.49Z" fill="#e2eef2" id="w"/><path d="M31.44,21.34L12.92,54.04c.12,.35,.31,.68,.58,.95l3.3,3.3c.46,.46,1.07,.71,1.72,.71h13.49l19.14-7.05,1.15-16.09c-.23-.27-.49-.51-.78-.71l-20.07-13.81Z" fill="#fca65c" id="x"/><path d="M49.88,34.03l-5.27,14.03-18.3,10.94h5.69l19.14-7.05,1.15-16.09c-.23-.27-.49-.51-.78-.71l-1.63-1.12Z" fill="#f5934a" id="y"/><path d="M52.29,35.86l-4.72,13.71,6.76-.99,2.27-4.48c-.08-.33-.2-.65-.36-.96l-3.44-6.53c-.14-.27-.32-.52-.52-.75Z" fill="#feb87e" id="a`"/><path d="M25.4,15.31l-6.04-6.03-6.03,6.03h0l-5.88,5.88c.12,.32,.3,.62,.55,.87l4.78,4.78,1.23,1.23,5.16,1.6,5.54-1.6h0l6.72-6.72-6.04-6.04Z" fill="#fdc99c" id="aa"/><path d="M14.01,28.07l3.74,3.74c.89,.89,2.33,.89,3.22,0l3.74-3.74H14.01Z" fill="#9dacb9" id="ab"/><path d="M56.6,44.1l-9.03,5.47h0l-15.57,9.43h23.7c.56,0,1.01-.45,1.01-1.01v-12.96c0-.32-.04-.63-.11-.94h0Z" fill="#fdc99c" id="ac"/><path d="M19.36,9.27l-7.16,4.07,1.12,1.97,6.03-6.04Z" fill="#fca65c" id="ad"/><path d="M19.36,9.27l7.16,4.07-1.12,1.97-6.03-6.04Z" fill="#fca65c" id="ae"/><path d="M56.6,44.1l-7.64,1.43-1.39,4.04,9.03-5.47Z" fill="#fca65c" id="af"/></g><g id="ag"/><g id="ah"/><g id="ai"/><g id="aj"/><g id="ak"/><g id="al"/><g id="am"/><g id="an"/><g id="ao"/><g id="ap"/><g id="aq"/><g id="ar"/><g id="as"/><g id="at"/><g id="au"/><g id="av"/><g id="aw"/><g id="ax"/><g id="ay"/><g id="b`"/><g id="ba"/><g id="bb"/><g id="bc"/><g id="bd"/><g id="be"/><g id="bf"/><g id="bg"/><g id="bh"/><g id="bi"/><g id="bj"/><g id="bk"/><g id="bl"/><g id="bm"/><g id="bn"/></svg>

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
