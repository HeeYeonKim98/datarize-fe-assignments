import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Error404 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">페이지를 찾을 수 없습니다</h1>
        <p className="text-gray-600 mb-8">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <div className="space-x-4">
          <Link to="/analytics">
            <Button>분석 페이지로 이동</Button>
          </Link>
          <Link to="/customers">
            <Button variant="outline">고객 관리로 이동</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error404
