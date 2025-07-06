import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui'
import LoadingSpinner from '@/components/loading/LoadingSpinner'
import { useCustomerDetailQuery } from '../../query/useCustomersQuery'
import PurchaseItemCard from '../card/PurchaseItemCard'

type Props = {
  customerId: number
  customerName: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const CustomerDetailDialog = ({ customerId, customerName, isOpen, onOpenChange }: Props) => {
  const { data, isFetching, error } = useCustomerDetailQuery(customerId)

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex gap-4 items-center">
            <span className="text-[20px] font-bold">{customerName} </span>
            <span className="text-[14px] font-[500px] text-gray-500">(ID: {customerId})</span>
          </DialogTitle>
          <hr className="w-full mt-2" />
        </DialogHeader>

        <div className="mt-2">
          {isFetching && <LoadingSpinner />}
          {error && <div className="text-center py-8 text-red-600">데이터를 불러오는 중 오류가 발생했습니다.</div>}
          {data && data.length === 0 && <div className="text-center py-8 text-gray-500">구매 내역이 없습니다.</div>}

          {data && data.length > 0 && (
            <div className="space-y-6">
              {data.map((item, index) => (
                <PurchaseItemCard key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CustomerDetailDialog
