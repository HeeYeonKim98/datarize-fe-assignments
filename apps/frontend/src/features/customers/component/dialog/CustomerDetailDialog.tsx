import { Dialog, DialogContent, DialogHeader, DialogTitle, Card, CardContent } from '@/components/ui'
import LoadingSpinner from '@/components/loading/LoadingSpinner'
import { useCustomerDetailQuery } from '../../query/useCustomersQuery'

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
          <DialogTitle className="text-xl font-bold">
            고객 상세 정보 - {customerName} (ID: {customerId})
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {isFetching && <LoadingSpinner />}
          {error && <div className="text-center py-8 text-red-600">데이터를 불러오는 중 오류가 발생했습니다.</div>}
          {data && data.length === 0 && <div className="text-center py-8 text-gray-500">구매 내역이 없습니다.</div>}

          {data && data.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">구매 내역</h3>

              {data.map((item, index) => (
                <Card key={index} className="border">
                  <CardContent className="p-4">
                    <div className="mb-4">
                      <h4 className="font-semibold text-blue-600">
                        📅 {new Date(item.date).toLocaleDateString('ko-KR')}
                      </h4>
                      <div className="text-sm text-gray-500">
                        수량: {item.quantity}개, 총액: {(item.price * item.quantity).toLocaleString('ko-KR')}원
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={item.imgSrc}
                        alt={item.product}
                        className="w-16 h-16 object-cover rounded-md"
                        onError={(e) => {
                          // 이미지 로드 실패 시 기본 색상 배경 표시
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          target.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                      <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 hidden">
                        상품
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{item.product}</div>
                        <div className="text-xs text-gray-500">수량: {item.quantity}개</div>
                        <div className="text-sm font-semibold text-blue-600">
                          {(item.price * item.quantity).toLocaleString('ko-KR')}원
                        </div>
                        <div className="text-xs text-gray-400">개당 {item.price.toLocaleString('ko-KR')}원</div>
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
