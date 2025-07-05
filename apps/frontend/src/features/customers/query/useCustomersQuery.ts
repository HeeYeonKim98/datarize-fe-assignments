import { getCustomerDetail, getCustomers } from '@/apis/customers'
import { customerDataSchema, customerDetailDataSchema } from '@/apis/customers/schema'
import { API_CUSTOMERS, API_CUSTOMERS_DETAIL } from '@/apis/customers/url'
import { useQuery } from '@tanstack/react-query'

export const useCustomersQuery = () => {
  return useQuery({
    queryKey: [API_CUSTOMERS],
    queryFn: async () => {
      const response = await getCustomers()
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
  })
}
