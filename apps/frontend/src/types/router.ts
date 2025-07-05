import { stringUnion } from '@/utils/stringUnion'

export const staticRoutesFactory = stringUnion('/analytics', '/customers')
export type RoutesType = typeof staticRoutesFactory.type
