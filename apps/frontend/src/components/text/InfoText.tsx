import { Info } from 'lucide-react'

type Props = {
  infoText: string
}

const InfoText = ({ infoText }: Props) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Info size={14} />
      <span>{infoText}</span>
    </div>
  )
}

export default InfoText
