export const DICTIONARY = {
  DESCRIPTIONS: {
    EXPECTED_USERNAME_AND_PASSWORD: 'Expected an username and password',
    USERNAME_OR_EMAIL: 'Username or Email',
    PASSWORD: 'Password width at least 8 characters',
    EXPECTED_REFRESH_TOKEN: 'Expected a refresh token',
  },
  ERRORS: {
    GENERIC: 'Check that the field has been entered correctly.',
    REQUIRED: 'It must not be empty either.',
    INVALID_REFRESH_TOKEN: 'It seems that the token you passed is not correct.',
  },
} as const
