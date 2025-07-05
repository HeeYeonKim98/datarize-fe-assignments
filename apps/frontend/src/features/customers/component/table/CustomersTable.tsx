import { flexRender } from '@tanstack/react-table'
import { useState } from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui'
import { cn } from '@/lib/utils'
import { CustomerData } from '@/apis/customers/type'
import { useCustomersTable } from '../../hook/useCustomersTable'
import SortCell from './header/SortCell'
import CustomerDetailDialog from '../dialog/CustomerDetailDialog'

type Props = {
  tableItems: CustomerData
}

const CustomersTable = ({ tableItems }: Props) => {
  const table = useCustomersTable({ tableItems })
  const [selectedCustomer, setSelectedCustomer] = useState<{ id: number; name: string } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClickRow = (customerId: number, customerName: string) => {
    setSelectedCustomer({ id: customerId, name: customerName })
    setIsModalOpen(true)
  }

  const onOpenChange = (open: boolean) => {
    setIsModalOpen(open)
  }

  return (
    <div className="flex justify-center flex-1 w-full">
      <div className="w-full h-[400px] overflow-hidden bg-white rounded-lg border">
        <div className="h-full overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-white border-b">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="whitespace-nowrap">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={cn(header.column.columnDef.meta?.thClassName, header.column.columnDef.meta?.className)}
                    >
                      <div className="flex items-center">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && (
                          <SortCell
                            getSorted={() => {
                              const sorted = header.column.getIsSorted()
                              return sorted === false ? 'default' : sorted
                            }}
                            getToggleSortingHandler={header.column.getToggleSortingHandler()}
                          />
                        )}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="whitespace-nowrap hover:bg-muted/50">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className={cn('cursor-pointer', cell.column.columnDef.meta?.className)}
                        onClick={() => onClickRow(row.original.id, row.original.name)}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {table.getRowModel().rows.length === 0 && (
            <div className="text-center mt-[180px] w-full">고객 목록이 없습니다.</div>
          )}
        </div>
      </div>

      {/* 고객 상세 다이얼로그 */}
      <CustomerDetailDialog
        customerId={selectedCustomer?.id ?? 0}
        customerName={selectedCustomer?.name ?? ''}
        isOpen={isModalOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}

export { CustomersTable }
