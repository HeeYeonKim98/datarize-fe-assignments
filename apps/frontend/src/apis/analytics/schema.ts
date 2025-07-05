import { z } from 'zod'

export const purchaseFrequencySchema = z.object({
  range: z.string(),
  count: z.number(),
})

export const purchaseFrequencyDataSchema = z.array(purchaseFrequencySchema)
