// "0 - 20000" 형태의 문자열을 "2만원 이하", "2-3만원" 등으로 변환
const getRangeLabel = (range: string): string => {
  const [minStr, , maxStr] = range.split(' ')
  const min = Number(minStr)
  const max = Number(maxStr)

  const minWan = Math.floor(min / 10000)
  const maxWan = Math.floor(max / 10000)

  // 0원부터 시작하면 "N만원 이하"
  if (min === 0) return `${maxWan}만원 이하`

  // 그 외 범위는 "N-M만원"
  return `${minWan}-${maxWan}만원`
}

export default getRangeLabel
