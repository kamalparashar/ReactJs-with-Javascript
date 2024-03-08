import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div 
    className=' w-full h-screen text-3xl text-white-300 flex justify-center align-middle' 
    style={{backgroundColor: color}}>
{/* style={{}} :- syntax of inline CSS in reactjs */}
      <div className='bg-white flex flex-wrap fixed bottom-10 rounded-3xl gap-1 border-2 border-black text-2xl'>
        
        <button 
        onClick={()=>{setColor('red')}}
        className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'red'}}>Red</button>
{/* onClick wants function as its parameter.
If we directly give setColor('red') (which is the syntax to set color to the variable else it will not work), this setColor will give him value which onClick() didnot want.
So, giving a arrow function to onclick() and inside this arrow function we call setColor to set the background color*/}
        <button 
        onClick={()=>{setColor('green')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'green'}}>Green</button>
        
        <button 
        onClick={()=>{setColor('blue')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'lightblue'}}>Blue</button>

        <button 
        onClick={()=>{setColor('pink')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'pink'}}>Pink</button>

        <button 
        onClick={()=>{setColor('violet')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'violet'}}>violet</button>

        <button 
        onClick={()=>{setColor('lavender')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'lavender'}}>Lavender</button>
        
        <button 
        onClick={()=>{setColor('orange')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'orange'}}>Orange</button>

        <button 
        onClick={()=>{setColor('lime')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black' 
        style={{backgroundColor: 'lime'}}>Lime</button>

        <button 
        onClick={()=>{setColor('black')}}className='m-4 px-4 py-2 rounded-3xl flex justify-center align-middle border-2 border-black text-white' style={{backgroundColor: 'black'}}>Black</button>
        
      </div>
    </div>
  )
}

export default App
