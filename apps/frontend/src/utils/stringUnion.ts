/**
 * 문자열 유니온 타입 생성
 * @param values 문자열 유니온 타입
 * @returns 문자열 유니온 타입
 * @example
 * const routes = stringUnion('/analytics', '/customers')
 * type RoutesType = typeof routes.type
 * const route: RoutesType = '/analytics'
 * const route: RoutesType = '/customers'
 * const route: RoutesType = '/not-found' // Error
 */
export const stringUnion = <UnionType extends string>(...values: UnionType[]) => {
  Object.freeze(values)
  const valueSet: Set<string> = new Set(values)

  const guard = (value: string): value is UnionType => {
    return valueSet.has(value)
  }

  const check = (value: string): UnionType => {
    if (!guard(value)) {
      const actual = JSON.stringify(value)
      const expected = values.map((s) => JSON.stringify(s)).join(' | ')
      throw new TypeError(`Value '${actual}' is not assignable to type '${expected}'.`)
    }
    return value
  }

  const unionNamespace = { guard, check, values }
  return Object.freeze(unionNamespace as typeof unionNamespace & { type: UnionType })
}
