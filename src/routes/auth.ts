import { authController } from '@lib/controllers/auth'
import { Elysia } from 'elysia'

export const authRouter = new Elysia({
  prefix: '/auth',
}).use(authController)
