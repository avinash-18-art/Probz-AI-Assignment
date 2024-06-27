import React, {useState, useEffect} from 'react'
import Chart from './components/Chart'
import TimeframeSelector from './components/TimeframeSelector'
import './styles/Chart.css'
import './styles/TimeframeSelector.css'
import 'App.css'

const App: React.FC = () => {
  const [data, setData] = useState([])
  const [timeframe, setTimeframe] = useState('daily')

  useEffect(() => {
    fetch('/assets/data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <TimeframeSelector timeframe={timeframe} setTimeframe={setTimeframe} />
      <Chart data={data} timeframe={timeframe} />
    </div>
  )
}

export default App
