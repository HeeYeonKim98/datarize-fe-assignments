import { STATUS_CODE } from './constant/statusCode'

const BASE_URL = 'http://localhost:4000'
const PREFIX = '/api'

export const fetcher = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  return await originalRequest<T>(url, options)
}

const originalRequest = async <T>(url: string, options: RequestInit): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${PREFIX}${url}`, options)
    if (!response.ok) checkResponseError(response)

    return await response.json()
  } catch (error) {
    throw new Error(String(STATUS_CODE.INTERNAL_SERVER_ERROR))
  }
}

const checkResponseError = (response: Response) => {
  if (response.status === STATUS_CODE.BAD_GATEWAY) {
    throw new Error(String(STATUS_CODE.BAD_GATEWAY))
  }
  if (response.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new Error(String(STATUS_CODE.INTERNAL_SERVER_ERROR))
  }
  return response
}
