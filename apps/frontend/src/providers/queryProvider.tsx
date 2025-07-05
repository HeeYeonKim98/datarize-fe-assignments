'use client'

import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const QueryProviders = ({ children }: React.PropsWithChildren) => {
  const defaultQueryConfig = {
    throwOnError: true,
    staleTime: 0 * 1000,
    gcTime: 30 * 1000,
    refetchOnWindowFocus: false,
  }

  const defaultMutationConfig = { throwOnError: true }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: defaultQueryConfig,
      mutations: defaultMutationConfig,
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export { QueryProviders }
