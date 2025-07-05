import { useQuery } from '@tanstack/react-query'
import { getPurchaseFrequency } from '@/apis/analytics'
import { purchaseFrequencyDataSchema } from '@/apis/analytics/schema'
import { PurchaseFrequencyPayload } from '@/apis/analytics/type'
import { API_PURCHASE_FREQUENCY } from '@/apis/analytics/url'
import { isApiErrorResponse } from '@/apis/fetcher/util'
import { toast } from 'sonner'

export const usePurchaseFrequencyQuery = (params: PurchaseFrequencyPayload) => {
  return useQuery({
    queryKey: [API_PURCHASE_FREQUENCY, params],
    queryFn: async () => {
      const response = await getPurchaseFrequency(params)

      if (isApiErrorResponse(response)) {
        toast.error(response.error)
        return null
      }

      return purchaseFrequencyDataSchema.parse(response)
    },
  })
}
