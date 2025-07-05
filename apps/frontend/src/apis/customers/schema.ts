import { z } from 'zod'

export const customerSchema = z.object({
  id: z.number(),
  name: z.string(),
  count: z.number(),
  totalAmount: z.number(),
})
export const customerDataSchema = z.array(customerSchema)

export const customerDetailSchema = z.object({
  date: z.string(),
  quantity: z.number(),
  product: z.string(),
  price: z.number(),
  imgSrc: z.string(),
})

export const customerDetailDataSchema = z.array(customerDetailSchema)
