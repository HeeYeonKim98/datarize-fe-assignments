import z from 'zod'
import { purchaseFrequencyDataSchema, purchaseFrequencySchema } from './schema'

// response
export type PurchaseFrequency = z.infer<typeof purchaseFrequencySchema>
export type PurchaseFrequencyData = z.infer<typeof purchaseFrequencyDataSchema>

// request
export type PurchaseFrequencyPayload = {
  from?: string
  to?: string
}
