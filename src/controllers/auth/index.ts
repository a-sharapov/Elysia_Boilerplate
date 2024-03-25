import {
  authLoginValidationGuard,
  authLogoutValidationGuard,
  authPatchValidationGuard,
  authStatusValidationGuard,
} from '@lib/guards/auth'
import { STATUSES } from '@lib/misc/statuses'
import { authService } from '@lib/services/auth/service'
import { Elysia } from 'elysia'

const authDummyHandler = <T extends Record<string, any>>({
  request: { method },
  // authService,
  body,
  params,
  query,
  store,
  // set,
}: T) => {
  // some auth logic

  console.table(body)
  console.table(params)
  console.table(store)
  console.table(query)

  // some auth logic

  return {
    status: Symbol.keyFor(STATUSES.COMPLETED),
    message: `Auth dummy ${method} handler`,
  }
}

const authRefreshHandler = authDummyHandler
const authLogoutHadler = authDummyHandler
const authStatusHandler = authDummyHandler
const authLoginHandler = authDummyHandler

export const authController = new Elysia({
  name: 'Controller.Auth',
  prefix: '/auth',
})
  .state('authState', {})
  .decorate('authService', authService)
  .get('/', authStatusHandler, authStatusValidationGuard)
  .post('/', authLoginHandler, authLoginValidationGuard)
  .patch('/', authRefreshHandler, authPatchValidationGuard)
  .delete('/', authLogoutHadler, authLogoutValidationGuard)
