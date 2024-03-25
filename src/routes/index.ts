import { authController } from '@lib/controllers/auth'
import Elysia from 'elysia'

export const routes = new Elysia()

routes.use(authController)

export type Routes = typeof routes
