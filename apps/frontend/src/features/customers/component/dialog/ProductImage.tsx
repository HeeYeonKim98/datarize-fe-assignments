import { useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  alt: string
  className?: string
}

const ProductImage = ({ src, alt, className }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return <div className={cn('w-16 h-16 rounded-md bg-gray-100', className)} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      className={cn(
        'w-16 h-16 object-cover rounded-md border transition-opacity duration-300',
        loaded ? 'opacity-100' : 'opacity-0',
        className,
      )}
    />
  )
}

export default ProductImage
