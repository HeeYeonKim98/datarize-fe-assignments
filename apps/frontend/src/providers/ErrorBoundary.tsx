import React, { ErrorInfo } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import ErrorPage from '../pages/error'

type Props = {
  children: React.ReactNode
}

function logError(error: Error, errorInfo: ErrorInfo) {
  console.error('Error logged by ErrorBoundary:', error, errorInfo)
  // 로깅 할 수 있는 곳
}

const ErrorBoundary = ({ children }: Props) => {
  return (
    <ReactErrorBoundary fallback={<ErrorPage />} onError={logError}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
