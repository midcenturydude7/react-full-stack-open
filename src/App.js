import React from 'react';
import Button from './components/Button';

const App = () => {
  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = React.useState(0)
  const [bad, setBad] = React.useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>
      <h2>Statistics</h2>
      <div>
        <span>Good: {good}</span><br />
        <span>Neutral: {neutral}</span><br />
        <span>Bad: {bad}</span>
      </div> 
    </div>
  )
}

export default App;
