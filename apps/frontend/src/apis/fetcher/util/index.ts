export type ApiErrorResponse = {
  error: string
}

/**
 * 응답 데이터가 에러 응답인지 확인
 * @param data 응답 데이터
 * @returns 에러 응답인지 여부
 */
export const isApiErrorResponse = (data: unknown): data is ApiErrorResponse => {
  return data !== null && typeof data === 'object' && 'error' in data
}
