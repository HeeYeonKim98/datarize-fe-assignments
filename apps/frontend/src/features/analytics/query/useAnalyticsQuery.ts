import { useQuery } from '@tanstack/react-query'
import { getPurchaseFrequency } from '@/apis/analytics'
import { purchaseFrequencyDataSchema } from '@/apis/analytics/schema'
import { PurchaseFrequencyPayload } from '@/apis/analytics/type'
import { API_PURCHASE_FREQUENCY } from '@/apis/analytics/url'
import { isApiErrorResponse } from '@/apis/fetcher/util'

export const usePurchaseFrequencyQuery = (params: PurchaseFrequencyPayload) => {
  return useQuery({
    queryKey: [API_PURCHASE_FREQUENCY, params],
    queryFn: async () => {
      const response = await getPurchaseFrequency(params)

      if (isApiErrorResponse(response)) {
        throw new Error(response.error)
      }

      return purchaseFrequencyDataSchema.parse(response)
    },
  })
}
