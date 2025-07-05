import { getCustomerDetail, getCustomers } from '@/apis/customers'
import { customerDataSchema, customerDetailDataSchema } from '@/apis/customers/schema'
import { CustomersPayload } from '@/apis/customers/type'
import { API_CUSTOMERS, API_CUSTOMERS_DETAIL } from '@/apis/customers/url'
import { isApiErrorResponse } from '@/apis/fetcher/util'

import { useQuery } from '@tanstack/react-query'

export const useCustomersQuery = (params?: CustomersPayload) => {
  return useQuery({
    queryKey: [API_CUSTOMERS, params],
    queryFn: async () => {
      const response = await getCustomers(params)

      if (isApiErrorResponse(response)) {
        return []
      }

      return customerDataSchema.parse(response)
    },
  })
}

export const useCustomerDetailQuery = (id: number) => {
  return useQuery({
    queryKey: [API_CUSTOMERS_DETAIL(id)],
    queryFn: async () => {
      const response = await getCustomerDetail(id)
      return customerDetailDataSchema.parse(response)
    },
    enabled: id > 0,
  })
}
