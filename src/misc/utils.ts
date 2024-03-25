import config from '@lib/config'
import { App } from '@lib/main'
import figlet from 'figlet'
import { STATUS_CODES } from './contstants'
import { DICTIONARY } from './dictionary'
import { STATUSES } from './statuses'

export const pipe =
  (...fns: Array<(payload: any) => any | Promise<any>>) =>
  (payload: any) =>
    fns.reduce(
      (arg, fn) => (arg instanceof Promise ? arg.then(fn) : fn(arg)),
      payload
    )

export const isEmptyObject = (obj: Record<string, any>): boolean =>
  Object.keys(obj).length === 0

export const mapErrors = <T extends Record<string, any>>(errors: T) =>
  Object.fromEntries(
    Object.keys(errors).map((key) => [
      key,
      errors[key].message || errors[key].error,
    ])
  )

export const fallbackHandler = <T extends Record<string, any>>({
  code,
  error,
  set,
}: T): object => {
  set.status = STATUS_CODES[code as keyof typeof STATUS_CODES]

  const reasonAssets = {
    description: error?.validator?.schema?.description,
    examples: error?.validator?.schema?.examples,
    errors:
      error?.validator?.schema?.properties &&
      mapErrors(error.validator.schema.properties),
  }

  return {
    status: Symbol.keyFor(STATUSES.INTERRUPTED),
    message: DICTIONARY[code as keyof typeof DICTIONARY] ?? error.message,
    ...reasonAssets,
  }
}

export const createMotd = (app: App): string => {
  const { server } = app
  if (!server) return ''

  const { protocol, hostname, port } = server as any
  const baseUrl = `${protocol}://${hostname}:${port}`
  const apiUrl = `${baseUrl}/api/v${config.version}`
  const projectName = figlet.textSync(process.env.npm_package_name ?? 'Backend')
  const isDevelopment = process.env.NODE_ENV !== 'production'

  return `${projectName}

  Based on Elysia was successfully started 🚀:

  🩺 Status: ${baseUrl}
  🤖 API: ${apiUrl}
  ${isDevelopment && `📖 Docs: ${baseUrl}${config.swaggerUrl}`}

`
}
