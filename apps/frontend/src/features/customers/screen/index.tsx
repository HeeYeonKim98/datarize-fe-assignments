import InfoText from '@/components/text/InfoText'
import { Button, Input } from '@/components/ui'
import { CustomersTable } from '../component/table/CustomersTable'
import { useCustomersQuery } from '../query/useCustomersQuery'
import LoadingSpinner from '@/components/loading/LoadingSpinner'

const Customers = () => {
  const { data, isFetching } = useCustomersQuery()

  if (isFetching) return <LoadingSpinner />

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-bold text-gray-900">고객 관리</div>
        <InfoText infoText="한 달 동안 가장 많이 구매한 고객을 조회할 수 있습니다." />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex gap-4 items-center">
        <div className="flex-10">
          <label htmlFor="search" className="block font-medium text-gray-700 mb-2">
            고객명 검색
          </label>
          <Input id="search" type="text" placeholder="고객명을 입력하세요" className="w-full" />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
          <Button className="w-full">검색</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 gap-4 items-center">
        <label className="block font-medium text-gray-700 mb-2">고객 목록 (총 {data?.length} 명)</label>
        <CustomersTable tableItems={data ?? []} />
      </div>
    </div>
  )
}

export default Customers
