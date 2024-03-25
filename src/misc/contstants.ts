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

export const PATTERNS = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  username: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
  jwtToken: /^[a-zA-Z0-9-._~+/]+=*$/,
} as const
