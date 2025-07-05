import { fetcher } from '../fetcher/fetcher'
import { CustomerData, CustomerDetailData, CustomersPayload } from './type'
import { API_CUSTOMERS, API_CUSTOMERS_DETAIL } from './url'

export const getCustomers = (params?: CustomersPayload) => {
  const searchParams = new URLSearchParams()

  if (params?.name) {
    searchParams.append('name', params.name)
  }

  const url = searchParams.toString() ? `${API_CUSTOMERS}?${searchParams.toString()}` : API_CUSTOMERS

  return fetcher<CustomerData>(url, {
    method: 'GET',
  })
}

export const getCustomerDetail = (id: number) =>
  fetcher<CustomerDetailData>(API_CUSTOMERS_DETAIL(id), {
    method: 'GET',
  })
