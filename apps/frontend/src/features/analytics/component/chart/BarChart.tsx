import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { PurchaseFrequencyData } from '@/apis/analytics/type'
import LoadingSpinner from '@/components/loading/LoadingSpinner'
import BarChartLegend from './BarChartLegend'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type Props = {
  data: PurchaseFrequencyData
  isLoading: boolean
}

const BarChart = ({ data, isLoading }: Props) => {
  const chartData = {
    labels: data.map((item) => item.range),
    datasets: [
      {
        label: '구매 빈도',
        data: data.map((item) => item.count),
        backgroundColor: [
          '#3B82F6', // blue-500
          '#10B981', // green-500
          '#F59E0B', // yellow-500
          '#EF4444', // red-500
          '#8B5CF6', // purple-500
          '#6B7280', // gray-500
          '#EC4899', // pink-500
          '#F97316', // orange-500
          '#06B6D4', // cyan-500
        ],
        borderColor: [
          '#2563EB', // blue-600
          '#059669', // green-600
          '#D97706', // yellow-600
          '#DC2626', // red-600
          '#7C3AED', // purple-600
          '#4B5563', // gray-600
          '#DB2777', // pink-600
          '#EA580C', // orange-600
          '#0891B2', // cyan-600
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  }

  const renderChartContent = () => {
    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!data?.length) {
      return (
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500 text-lg">데이터가 없습니다.</p>
        </div>
      )
    }

    return <Bar data={chartData} options={options} />
  }

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="chart" className="block text-[16px] font-bold text-gray-700 mb-2">
          가격대별 구매 빈도 차트
        </label>
        <div className="h-96">{renderChartContent()}</div>
        <BarChartLegend />
      </div>
    </>
  )
}

export default BarChart
