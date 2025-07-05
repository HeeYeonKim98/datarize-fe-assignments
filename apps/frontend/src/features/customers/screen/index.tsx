import InfoText from '@/components/text/InfoText'
import { Button, Input } from '@/components/ui'

const Customers = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-gray-900">고객 관리</div>
        <InfoText infoText="한 달 동안 가장 많이 구매한 고객을 조회할 수 있습니다." />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">고객 검색 및 정렬</h2>
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              고객명 검색
            </label>
            <Input id="search" type="text" placeholder="고객명을 입력하세요" className="w-full" />
          </div>
          <div className="flex-1">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
              정렬 기준
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option value="id">ID 순</option>
              <option value="asc">구매금액 오름차순</option>
              <option value="desc">구매금액 내림차순</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
            <Button className="w-full">검색하기</Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold text-gray-800">고객 목록</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  고객 ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  고객명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  총 구매 횟수
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  총 구매 금액
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">액션</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td colSpan={5} className="px-6 py-20 text-center">
                  <div className="text-gray-500">
                    <div>고객 데이터를 불러오는 중...</div>
                    <div className="text-sm text-gray-400 mt-1">
                      (TanStack Query로 데이터 로드 후 TanStack Table 연동)
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 플레이스홀더 */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              총 <span className="font-semibold">0</span>명의 고객
            </div>
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                이전
              </Button>
              <Button variant="outline" disabled>
                다음
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers
