export type ApiErrorResponse = {
  error: string
}

export const isApiErrorResponse = (data: unknown): data is ApiErrorResponse => {
  return data !== null && typeof data === 'object' && 'error' in data
}
