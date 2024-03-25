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
  authService,
  store,
  set,
}: T) => {
  // some auth logic

  console.log(authService, store, set)
  authService.login?.()
  // some auth logic

  return {
    status: Symbol.keyFor(STATUSES.IDLE),
    message: `Auth dummy ${method} handler`,
  }
}

const authRefreshHandler = authDummyHandler
const authLogoutHadler = authDummyHandler
const authStatusHandler = authDummyHandler
const authLoginHandler = authDummyHandler

export const authController = new Elysia({ prefix: '/auth' })
  .state('authState', {})
  .decorate('authService', authService)
  .post('/', authLoginHandler, authLoginValidationGuard)
  .delete('/', authLogoutHadler, authLogoutValidationGuard)
  .patch('/', authRefreshHandler, authPatchValidationGuard)
  .get('/', authStatusHandler, authStatusValidationGuard)
