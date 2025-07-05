import { fetcher } from '../fetcher'
import { Customer, CustomerDetail } from './type'
import { API_CUSTOMERS, API_CUSTOMERS_DETAIL } from './url'

export const getCustomers = () => fetcher<Customer[]>(API_CUSTOMERS)

export const getCustomerDetail = (id: number) => fetcher<CustomerDetail[]>(API_CUSTOMERS_DETAIL(id))
