import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import GlobalNavigationBar from './layouts/GlobalNavigationBar'
import PageContainer from './layouts/PageContainer'
import AnalyticsPage from './pages/Analytics'
import CustomersPage from './pages/Customers'
import NotFoundPage from './pages/not-found'
import ErrorBoundary from './providers/ErrorBoundary'
import { QueryProviders } from './providers/queryProvider'
import { Toaster } from 'sonner'

function App() {
  return (
    <QueryProviders>
      <Toaster position="top-center" />
      <BrowserRouter>
        <ErrorBoundary>
          <GlobalNavigationBar />
          <PageContainer>
            <Routes>
              <Route path="/" element={<Navigate to="/analytics" replace />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/customers" element={<CustomersPage />} />
              <Route path="/customers/:id" element={<div>고객 상세 페이지</div>} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageContainer>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryProviders>
  )
}

export default App
