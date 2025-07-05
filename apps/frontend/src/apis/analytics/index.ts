import { fetcher } from '../fetcher/fetcher'
import { PurchaseFrequencyData, PurchaseFrequencyPayload } from './type'
import { API_PURCHASE_FREQUENCY } from './url'

export const getPurchaseFrequency = async (payload: PurchaseFrequencyPayload) => {
  const searchParams = new URLSearchParams()

  if (payload.from) {
    searchParams.append('from', payload.from)
  }

  if (payload.to) {
    searchParams.append('to', payload.to)
  }

  const url = searchParams.toString() ? `${API_PURCHASE_FREQUENCY}?${searchParams.toString()}` : API_PURCHASE_FREQUENCY

  return await fetcher<PurchaseFrequencyData>(url, {
    method: 'GET',
  })
}
