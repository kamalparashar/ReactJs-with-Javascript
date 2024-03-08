import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// value is getting updated but not visible on page
// problem is : UI Updation
// react controls UI Updation using React Hooks

function App() {

  const [counter, setCounter] = useState(0);
// const [variableName, function] = useState(defaultValue)
// can use const and let as it is an array.

  const addvalue = () => {
    // counter = counter+1;
    // console.log('add value', counter);
    if(counter < 20){
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      setCounter(counter+1);
      // It will increment ONLY ONCE NOT 4 TIMES!!

      // This is due to useState hook as we know hooks handle UI updation and also updating values of variables.

      // React try to optimise the process by sending updation in bunch,and reflecting only the final state of the variable NOT INTERMIDIATE STATE OF THE VARIABLE.

      // Here we are doing same task again and again. So, react will reconsider it and update the variable only once.

      // To update it 4 times do this:
      
      setCounter((prevcounter) => prevcounter+1);
      setCounter((prevcounter) => prevcounter+1);
      setCounter((prevcounter) => prevcounter+1);
      setCounter((prevcounter) => prevcounter+1);

      // setCounter has a callback function which ask for previous state of the variable.

      // we can get the desired result now as each call will be dealt seperatly since function is asking for previous state of the variable.
    }
  }
  const removevalue = () => {
    // counter = counter-1;
    // console.log('remove value', counter);
    if(counter > 0){
      setCounter(counter-1);
    }
  }

  // let counter = 15;
  return(
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
