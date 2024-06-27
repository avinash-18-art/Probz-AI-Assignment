import React from 'react'
import '../styles/TimeframeSelector.css'

interface TimeframeSelectorProps {
  timeframe: string
  setTimeframe: (timeframe: string) => void
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  timeframe,
  setTimeframe,
}) => {
  return (
    <div className="timeframe-selector">
      <button
        onClick={() => setTimeframe('daily')}
        className={timeframe === 'daily' ? 'active' : ''}
      >
        Daily
      </button>
      <button
        onClick={() => setTimeframe('weekly')}
        className={timeframe === 'weekly' ? 'active' : ''}
      >
        Weekly
      </button>
      <button
        onClick={() => setTimeframe('monthly')}
        className={timeframe === 'monthly' ? 'active' : ''}
      >
        Monthly
      </button>
    </div>
  )
}

export default TimeframeSelector
