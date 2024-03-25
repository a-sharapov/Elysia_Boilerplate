export const IDLE = Symbol.for('idle')
export const PENDING = Symbol.for('pending')
export const IN_PROCESS = Symbol.for('inProcess')
export const INTERRUPTED = Symbol.for('interrupted')
export const COMPLETED = Symbol.for('completed')
export const TERMINATED = Symbol.for('terminated')

export const STATUSES = {
  IDLE,
  PENDING,
  IN_PROCESS,
  INTERRUPTED,
  COMPLETED,
  TERMINATED,
} as const
