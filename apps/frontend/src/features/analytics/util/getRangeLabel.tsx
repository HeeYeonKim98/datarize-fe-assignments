/**
 * "0 - 20000" 형태의 문자열을 "2만원 이하", "2-3만원" 등으로 변환
 * @param range 0 - 20000 형태의 문자열
 * @returns 2만원 이하, 2-3만원 등의 문자열
 */
const getRangeLabel = (range: string): string => {
  const [minStr, , maxStr] = range.split(' ')
  const min = Number(minStr)
  const max = Number(maxStr)

  const minWan = Math.floor(min / 10000)
  const maxWan = Math.floor(max / 10000)

  if (min === 0) return `${maxWan}만원 이하`
  return `${minWan}-${maxWan}만원`
}

export default getRangeLabel
