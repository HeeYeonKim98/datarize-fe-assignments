import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { CustomersTable } from '../CustomersTable'

// react-query hook mock (빈 데이터 반환)
jest.mock('../../../query/useCustomersQuery', () => ({
  useCustomerDetailQuery: () => ({ data: [], isFetching: false, error: null }),
}))

const wrapper = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

// 샘플 데이터
const sampleData = [{ id: 1, name: 'Charlie', count: 5, totalAmount: 2000 }]

describe('고객 상세 모달', () => {
  it('행 클릭 시 다이얼로그가 열린다', async () => {
    const user = userEvent.setup()
    render(<CustomersTable tableItems={sampleData} />, { wrapper })

    // 아직 모달 표시 없음
    expect(screen.queryByTestId('detail-dialog')).not.toBeInTheDocument()

    // 첫 행의 첫 셀 클릭
    const firstCell = screen.getAllByRole('cell')[0]
    await user.click(firstCell)

    // 모달 표시 확인 (비동기) - role="dialog" 및 고객명 텍스트
    const dialog = await screen.findByRole('dialog')
    expect(dialog).toBeInTheDocument()
    // "Charlie" 텍스트는 테이블과 다이얼로그 양쪽에 존재할 수 있으므로, 다이얼로그 내부에서만 검색한다
    expect(within(dialog).getByText('Charlie')).toBeInTheDocument()
  })
})
