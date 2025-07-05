import { useState } from 'react'
import InfoText from '@/components/text/InfoText'
import { Button, Input } from '@/components/ui'
import { CustomersTable } from '../component/table/CustomersTable'
import { useCustomersQuery } from '../query/useCustomersQuery'
import LoadingSpinner from '@/components/loading/LoadingSpinner'

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentSearch, setCurrentSearch] = useState('')

  const { data, isFetching } = useCustomersQuery({ name: currentSearch })

  const handleSearch = () => {
    setCurrentSearch(searchTerm)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  if (isFetching) return <LoadingSpinner />

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-gray-900">고객 관리</div>
        <InfoText infoText="한 달 동안 가장 많이 구매한 고객을 조회할 수 있습니다." />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md gap-4">
        <label htmlFor="search" className="block text-[16px] font-bold text-gray-700 mb-2">
          고객명 검색
        </label>
        <div className="flex gap-2">
          <Input
            id="search"
            type="text"
            placeholder="고객명을 입력하세요"
            className="w-full h-[35px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
          />

          <Button onClick={handleSearch} className="whitespace-nowrap">
            검색
          </Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 gap-4 items-center">
        <label className="block text-[16px] font-bold text-gray-700 mb-2">
          고객 목록 {data?.length ? `(총 ${data.length} 명)` : ''}
          {currentSearch && <span className="text-blue-600 ml-2">- "{currentSearch}" 검색 결과</span>}
        </label>
        <CustomersTable tableItems={data ?? []} />
      </div>
    </div>
  )
}

export default Customers
