import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { RoutesType } from '@/types/router'
import { cn } from '@/lib/utils'

type Route = {
  title: string
  path: RoutesType
}

const GlobalNavigationBar = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const routes: Array<Route> = [
    {
      title: '가격대 별 분석',
      path: '/analytics',
    },
    {
      title: '고객 관리',
      path: '/customers',
    },
  ]

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="flex items-center h-20 gap-6 px-8">
        <div className="text-2xl font-bold text-gray-900">Datarize Admin</div>

        <div className="flex space-x-2">
          {routes.map((route) => (
            <Link to={route.path} key={route.path}>
              <Button
                variant={isActive(route.path) ? 'default' : 'ghost'}
                className={cn('bg-white text-gray-900', isActive(route.path) && 'bg-gray-900 text-white')}
              >
                {route.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default GlobalNavigationBar
