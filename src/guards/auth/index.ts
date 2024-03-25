import { PATTERNS } from '@lib/misc/contstants'
import { t } from 'elysia'
import { DICTIONARY } from './dictionary'

const tags = ['Auth']

export const authLoginValidationGuard = {
  body: t.Object(
    {
      login: t.String({
        minLength: 3,
        format: 'regex',
        pattern: `^${PATTERNS.username.source}$|${PATTERNS.email.source}$`,
        required: true,
        error: `${DICTIONARY.ERRORS.GENERIC} ${DICTIONARY.ERRORS.REQUIRED}`,
      }),
      password: t.String({
        minLength: 8,
        format: 'regex',
        pattern: PATTERNS.password.source,
        required: true,
        error: `${DICTIONARY.ERRORS.GENERIC} ${DICTIONARY.ERRORS.REQUIRED}`,
      }),
    },
    {
      description: DICTIONARY.DESCRIPTIONS.EXPECTED_USERNAME_AND_PASSWORD,
      examples: {
        login: DICTIONARY.DESCRIPTIONS.USERNAME_OR_EMAIL,
        password: DICTIONARY.DESCRIPTIONS.PASSWORD,
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
        format: 'regex',
        pattern: PATTERNS.jwtToken.source,
        error: DICTIONARY.ERRORS.INVALID_REFRESH_TOKEN,
      }),
    },
    {
      description: DICTIONARY.DESCRIPTIONS.EXPECTED_REFRESH_TOKEN,
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
