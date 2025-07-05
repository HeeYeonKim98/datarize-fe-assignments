import { Dialog, DialogContent, DialogHeader, DialogTitle, Card, CardContent } from '@/components/ui'
import LoadingSpinner from '@/components/loading/LoadingSpinner'
import { useCustomerDetailQuery } from '../../query/useCustomersQuery'
import ProductImage from './ProductImage'

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
                <Card key={index} className="border hover:shadow-sm transition-shadow">
                  <CardContent className="space-y-4">
                    {/* 날짜 & 총액 */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-medium">
                        {new Date(item.date).toLocaleDateString('ko-KR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="font-semibold text-blue-600">
                        총 {(item.price * item.quantity).toLocaleString('ko-KR')}원
                      </span>
                    </div>

                    {/* 상품 정보 */}
                    <div className="grid grid-cols-[64px_1fr_auto] gap-4 items-center">
                      {/* 이미지 */}
                      <ProductImage src={item.imgSrc} alt={item.product} />

                      {/* 이름 & 단가 */}
                      <div className="min-w-0">
                        <div className="font-medium truncate text-gray-800">{item.product}</div>
                        <div className="text-xs text-gray-500 mt-0.5">개당 {item.price.toLocaleString('ko-KR')}원</div>
                      </div>

                      {/* 수량 */}
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-700">{item.quantity}개</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CustomerDetailDialog
