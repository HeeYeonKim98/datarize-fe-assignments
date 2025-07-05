import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  RowSelectionState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'

import { Customer, CustomerData } from '@/apis/customers/type'

type UseCustomersTableProps = {
  tableItems: CustomerData
}

const useCustomersTable = ({ tableItems }: UseCustomersTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: false }])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const columnHelper = createColumnHelper<Customer>()

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        id: 'id',
        header: () => <div>고객 ID</div>,
        cell: ({ row }) => <span>{row.original.id}</span>,
        sortingFn: 'basic',
        meta: {
          className: 'w-[120px] px-[10px]',
          thClassName: 'group',
        },
      }),
      columnHelper.accessor('name', {
        id: 'name',
        header: () => <div>고객명</div>,
        cell: ({ row }) => <span>{row.original.name}</span>,
        sortingFn: 'text',
        meta: {
          className: 'w-[200px] px-[10px]',
          thClassName: 'group',
        },
      }),
      columnHelper.accessor('count', {
        id: 'count',
        header: () => <div>구매 횟수</div>,
        cell: ({ row }) => <span>{row.original.count}회</span>,
        sortingFn: 'basic',
        meta: {
          className: 'w-[120px] px-[10px]',
          thClassName: 'group',
        },
      }),
      columnHelper.accessor('totalAmount', {
        id: 'totalAmount',
        header: () => <div>총 구매 금액</div>,
        cell: ({ row }) => <span>{row.original.totalAmount.toLocaleString('ko-KR')}원</span>,
        sortingFn: 'basic',
        meta: {
          className: 'w-[150px] px-[10px]',
          thClassName: 'group',
        },
      }),
    ],
    [columnHelper],
  )

  return useReactTable({
    data: tableItems,
    columns,
    state: {
      sorting,
      rowSelection,
    },
    enableMultiRowSelection: false,
    enableSortingRemoval: false,
    enableMultiSort: false,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })
}

export { useCustomersTable }
