import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { CustomersTable } from '../CustomersTable'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const sampleData = [
  { id: 1, name: 'Charlie', count: 5, totalAmount: 2000 },
  { id: 2, name: 'Alice', count: 2, totalAmount: 3000 },
  { id: 3, name: 'Bob', count: 1, totalAmount: 1000 },
]

const createWrapper = () => {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}

describe('<CustomersTable />', () => {
  const setup = () => {
    const user = userEvent.setup()
    render(<CustomersTable tableItems={sampleData} />, { wrapper: createWrapper() })

    const getFirstRowCells = () => screen.getAllByRole('row')[1].querySelectorAll('td')
    return { getFirstRowCells, user }
  }

  it('"고객명" 컬럼: 1st 클릭 ASC, 2nd 클릭 DESC', async () => {
    const { getFirstRowCells, user } = setup()

    const th = screen.getByText('고객명').closest('th')!
    const toggle = th.querySelector('button')!

    // 1.ASC
    await user.click(toggle)
    expect(getFirstRowCells()[1].textContent).toBe('Alice')

    // 2.DESC
    await user.click(toggle)
    expect(getFirstRowCells()[1].textContent).toBe('Charlie')
  })

  it('"고객 ID" 컬럼: 초기 ASC, 첫 클릭 DESC, 두 번째 클릭 ASC', async () => {
    const { getFirstRowCells, user } = setup()

    const th = screen.getByText('고객 ID').closest('th')!
    const toggle = th.querySelector('button')!

    // 1.초기 상태: ASC (1이 먼저)
    expect(getFirstRowCells()[0].textContent).toBe('1')

    // 2.클릭 → DESC (3이 먼저)
    await user.click(toggle)
    expect(getFirstRowCells()[0].textContent).toBe('3')

    // 3.다시 클릭 → ASC (1이 먼저)
    await user.click(toggle)
    expect(getFirstRowCells()[0].textContent).toBe('1')
  })

  it('"구매 횟수" 컬럼: 1st 클릭 DESC, 2nd 클릭 ASC', async () => {
    const { getFirstRowCells, user } = setup()

    const th = screen.getByText('구매 횟수').closest('th')!
    const toggle = th.querySelector('button')!

    // 1.DESC
    await user.click(toggle)
    expect(getFirstRowCells()[2].textContent).toBe('5회')

    // 2.ASC
    await user.click(toggle)
    expect(getFirstRowCells()[2].textContent).toBe('1회')
  })

  it('"총 구매 금액" 컬럼: 1st 클릭 DESC, 2nd 클릭 ASC', async () => {
    const { getFirstRowCells, user } = setup()

    const th = screen.getByText('총 구매 금액').closest('th')!
    const toggle = th.querySelector('button')!

    // 1.DESC
    await user.click(toggle)
    expect(getFirstRowCells()[3].textContent).toBe('3,000원')

    // 2.ASC
    await user.click(toggle)
    expect(getFirstRowCells()[3].textContent).toBe('1,000원')
  })

  it('데이터가 없을 때 "고객 목록이 없습니다." 메시지를 표시한다', () => {
    render(<CustomersTable tableItems={[]} />, { wrapper: createWrapper() })

    expect(screen.getByText('고객 목록이 없습니다.')).toBeInTheDocument()
  })
})
