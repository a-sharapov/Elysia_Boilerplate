import { t } from 'elysia'
import { DICTIONARY } from './dictionary'

const tags = ['Auth']

export const authLoginValidationGuard = {
  body: t.Object(
    {
      login: t.String({
        minLength: 3,
        required: true,
      }),
      password: t.String({
        minLength: 8,
        required: true,
      }),
    },
    {
      description: DICTIONARY.EXPECTED_USERNAME_AND_PASSWORD,
      examples: {
        login: DICTIONARY.USERNAME_OR_EMAIL,
        password: DICTIONARY.PASSWORD,
      },
    }
  ),
  detail: {
    summary: 'Sign in by username or email and password',
    tags,
  },
}

export const authLogoutValidationGuard = {
  query: t.Object(
    {
      t: t.String({
        required: true,
      }),
    },
    {
      description: DICTIONARY.EXPECTED_REFRESH_TOKEN,
    }
  ),
  detail: {
    summary: 'Sign out with current active refresh token',
    tags,
  },
}

export const authPatchValidationGuard = {
  detail: {
    summary:
      'Update the authorization status and reissue a new token pair if needed',
    tags,
  },
}

export const authStatusValidationGuard = {
  detail: {
    summary: 'Get current authorization status',
    tags,
  },
}
