export const AVAILABLE_ORIGIN = '*' as const

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  UNKNOWN: 400,
} as const

export const API_TAGS = {
  App: 'General endpoints',
  Auth: 'Authentication endpoints',
  Misc: 'Technical endpoints',
} as const

export const ENDPOINTS_DESCRIPTORS = {
  MAIN: 'Health-check endpoint',
  API_ROOT: 'Root API endpoint (redirects to current API version)',
} as const
