import React from 'react';
import Display from './components/Display';
import Button from './components/Button';

// { Stateful component}
// import Counter from './components/Counter';

// { Getting started }
// import Header from './components/Header';
// import Content from './components/Content';
// import Total from './components/Total';

// { Component helper functions and destructuring }
// import Hello from './components/Hello';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button 
        onClick={increaseByOne}
        text="plus"
      />
      <Button 
        onClick={setToZero}
        text="zero"
      />
      <Button 
        onClick={decreaseByOne}
        text="minus"
      />
    </div>
  );
    // { Stateful components }
    // <Counter />

  // const {counter} = props
  
  // return (
  //   <div>{counter}</div>
  // )

  // { Getting started }
  // const course = 'Half Stack application development';
  // const exercises1 = 10;
  // const exercises2 = 7;
  // const exercises3 = 14;
  // const totals = exercises1 + exercises2 + exercises3;

  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content />
  //     <Total totals={totals} />
  //   </div>

// { Component helper functions and destructuring }
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Henry" age={14} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// }
}

export default App;
