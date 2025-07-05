import { useState } from 'react'
import InfoText from '@/components/text/InfoText'
import { Button, Input } from '@/components/ui'
import { usePurchaseFrequencyQuery } from '../query/useAnalyticsQuery'
import BarChart from '../component/chart/BarChart'

const Analytics = () => {
  const [from, setFrom] = useState('2024-07-01')
  const [to, setTo] = useState('2024-07-31')
  const [currentQuery, setCurrentQuery] = useState({
    from: '2024-07-01',
    to: '2024-07-31',
  })

  const { data, isLoading } = usePurchaseFrequencyQuery(currentQuery)

  const handleFromChange = (value: string) => {
    setFrom(value)
    if (new Date(value) > new Date(to)) {
      setTo(value)
    }
  }

  const handleToChange = (value: string) => {
    setTo(value)
    if (new Date(value) < new Date(from)) {
      setFrom(value)
    }
  }

  const handleSearch = () => {
    setCurrentQuery({
      from,
      to,
    })
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-gray-900">가격대별 구매 빈도 분석</div>
        <InfoText infoText="한 달 동안 발생한 구매 데이터를 바탕으로, 각 가격대의 제품이 얼마나 많이 구매되었는지 보여주는 차트입니다." />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="date-range" className="block text-[16px] font-bold text-gray-700 mb-2">
          기간 선택
        </label>
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-2">
              시작일
            </label>
            <Input
              id="start-date"
              type="date"
              value={from}
              max={to}
              onChange={(e) => handleFromChange(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-2">
              종료일
            </label>
            <Input
              id="end-date"
              type="date"
              value={to}
              min={from}
              onChange={(e) => handleToChange(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
            <Button onClick={handleSearch} className="w-full">
              조회하기
            </Button>
          </div>
        </div>
      </div>

      <BarChart data={data ?? []} isLoading={isLoading} />
    </div>
  )
}

export default Analytics
