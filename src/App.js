import React from 'react';
import History from './components/History';
import Button from './components/Button';

const App = () => {
  const [left, setLeft] = React.useState(0)
  const [right, setRight] = React.useState(0)
  const [allClicks, setAll] = React.useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <p>{allClicks.join(" ")}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
