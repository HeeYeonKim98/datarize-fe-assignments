type Props = {
  children: React.ReactNode
}

const PageContainer = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-20">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  )
}

export default PageContainer
