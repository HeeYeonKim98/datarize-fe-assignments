import InfoText from '@/components/text/InfoText'
import { Button, Input } from '@/components/ui'

const Analytics = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-gray-900">가격대별 구매 빈도 분석</div>
        <InfoText infoText="한 달 동안 발생한 구매 데이터를 바탕으로, 각 가격대의 제품이 얼마나 많이 구매되었는지 보여주는 차트입니다." />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">기간 선택</h2>
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-2">
              시작일
            </label>
            <Input id="start-date" type="date" defaultValue="2024-07-01" className="w-full" />
          </div>
          <div className="flex-1">
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-2">
              종료일
            </label>
            <Input id="end-date" type="date" defaultValue="2024-07-31" className="w-full" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
            <Button className="w-full">조회하기</Button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">가격대별 구매 빈도 차트</h2>

        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl text-gray-400 mb-2">📊</div>
            <div className="text-gray-600">차트가 여기에 표시됩니다</div>
            <div className="text-sm text-gray-500 mt-1">(TanStack Query로 데이터 로드 후 차트 라이브러리 연동)</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">가격대 구분</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>2만원 이하</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>2-3만원</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>3-4만원</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>4-5만원</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span>5-10만원</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              <span>10만원 이상</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
