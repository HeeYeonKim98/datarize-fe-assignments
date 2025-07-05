import z from 'zod'
import { customerDataSchema, customerDetailDataSchema, customerDetailSchema, customerSchema } from './schema'

// response
export type Customer = z.infer<typeof customerSchema>
export type CustomerData = z.infer<typeof customerDataSchema>

export type CustomerDetail = z.infer<typeof customerDetailSchema>
export type CustomerDetailData = z.infer<typeof customerDetailDataSchema>

// request
export type CustomersPayload = {
  name?: string
}
