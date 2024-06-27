import React, {useEffect, useState, useRef} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import html2canvas from 'html2canvas'
import '../styles/Chart.css'

const Chart: React.FC<{data: any[]; timeframe: string}> = ({
  data,
  timeframe,
}) => {
  const [filteredData, setFilteredData] = useState(data)
  const chartRef = useRef(null)

  useEffect(() => {
    const filterData = () => {
      
      const now = new Date()
      let newData = data

      if (timeframe === 'weekly') {
        newData = data.filter(d => {
          const date = new Date(d.timestamp)
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          return date >= weekAgo
        })
      } else if (timeframe === 'monthly') {
        newData = data.filter(d => {
          const date = new Date(d.timestamp)
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
          return date >= monthAgo
        })
      }

      setFilteredData(newData)
    }

    filterData()
  }, [timeframe, data])

  const exportChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then(canvas => {
        const link = document.createElement('a')
        link.download = 'chart.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
      })
    }
  }

  return (
    <div>
      <button onClick={exportChart}>Export Chart</button>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData} ref={chartRef}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
