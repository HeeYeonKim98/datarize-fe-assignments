import { CustomerDetail } from '@/apis/customers/type'
import { Card, CardContent } from '@/components/ui'
import ProductImage from '../dialog/ProductImage'

type Props = {
  item: CustomerDetail
  key: React.Key
}

const PurchaseItemCard = ({ item, key }: Props) => {
  return (
    <Card key={key} className="border hover:shadow-sm transition-shadow">
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
  )
}

export default PurchaseItemCard
