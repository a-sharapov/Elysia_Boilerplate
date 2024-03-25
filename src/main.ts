import bearer from '@elysiajs/bearer'
import cors from '@elysiajs/cors'
import { jwt } from '@elysiajs/jwt'
import serverTiming from '@elysiajs/server-timing'
import { swagger } from '@elysiajs/swagger'
import config from '@lib/config'
import {
  API_TAGS,
  AVAILABLE_ORIGIN,
  ENDPOINTS_DESCRIPTORS,
} from '@lib/misc/contstants'
import { createMotd, fallbackHandler, pipe } from '@lib/misc/utils'
import { routes } from '@lib/routes'
import { Elysia } from 'elysia'
import { createRepository } from './repository'

const { secret, port, version, healthyTpl, tokenTTL, swaggerUrl } = config
const baseUrl = `/api/v${version}`
const isDevelopment = process.env.NODE_ENV !== 'production'
const tags = Object.keys(API_TAGS).map((key) => ({
  name: key,
  description: API_TAGS[key as keyof typeof API_TAGS] as string,
}))

const app = new Elysia({ name: 'MainInstance' })
  .onError(fallbackHandler)
  .use(
    cors({
      origin: isDevelopment ? '*' : AVAILABLE_ORIGIN,
      credentials: true,
    })
  )
  .use(serverTiming())
  .use(
    jwt({
      name: 'jwt',
      secret,
      exp: tokenTTL,
    })
  )
  .use(bearer())
  .decorate('db', createRepository())
  .get('/', () => Bun.file(healthyTpl), {
    detail: {
      description: ENDPOINTS_DESCRIPTORS.MAIN,
      tags: ['Misc'],
    },
  })
  .get('/api', ({ set }) => (set.redirect = baseUrl), {
    detail: {
      description: ENDPOINTS_DESCRIPTORS.API_ROOT,
      tags: ['Misc'],
    },
  })
  .group(baseUrl, (app) => app.use(routes))

isDevelopment &&
  app.use(
    swagger({
      path: swaggerUrl,
      documentation: {
        tags,
      },
    })
  )

app.listen(port ?? 5757)

pipe(createMotd, console.log)(app)

export type App = typeof app
