export const notNull = <T>(value: T): value is NonNullable<typeof value> =>
  value !== null
