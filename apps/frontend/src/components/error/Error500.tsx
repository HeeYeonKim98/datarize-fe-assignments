import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Error500 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-6xl font-bold text-red-300 mb-4">500</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">서버 오류가 발생했습니다</h1>
        <p className="text-gray-600 mb-8">
          일시적인 문제로 서비스 이용에 불편을 드려 죄송합니다.
          <br />
          잠시 후 다시 시도해주세요.
        </p>
        <div className="space-x-4">
          <Button onClick={() => window.location.reload()}>페이지 새로고침</Button>
          <Link to="/analytics">
            <Button variant="outline">메인으로 이동</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error500
