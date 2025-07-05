import { TableToggleCell } from '@/components/ui'
import { SortDirection } from '@tanstack/react-table'
import { MoveDown, MoveUp } from 'lucide-react'

type Props = {
  getSorted: () => 'default' | SortDirection
  getToggleSortingHandler?: (event: unknown) => void
}

const SortCell = ({ getSorted, getToggleSortingHandler, ...props }: Props) => {
  const sortIcon = {
    asc: <MoveUp size={14} />,
    desc: <MoveDown size={14} />,
    default: <MoveDown size={14} className="opacity-0 group-hover:opacity-50" />,
  }
  const sortDirection = getSorted()

  const onClick = () => {
    getToggleSortingHandler?.(sortDirection)
  }

  return (
    <TableToggleCell className="ml-[2px] p-[2px]" {...props} onClick={onClick}>
      {sortIcon[sortDirection]}
    </TableToggleCell>
  )
}

export default SortCell
