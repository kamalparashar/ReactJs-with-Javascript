import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback( () => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(specialAllowed) str += "`~!@#$%^&*()-_+=[]{}?";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, specialAllowed, setPassword])

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,specialAllowed,passwordGenerator])

  return (
    <>
      <div className='bg-black 
      min-h-screen min-w-screen p-8 text-center flex justify-center items-center'>
  
        <div className='bg-gray-600 border-2 rounded-2xl pb-2'>
          <h1 className='bg-slate-400 text-5xl font-bold border-b shadow-xl py-2 rounded-t-xl'>Password Generator</h1>

          <div className='mx-4 my-8 py-8'>

            <div className='flex justify-center px-2 pb-8 text-3xl font-bold'>
              <input 
                type="text"
                value={password}
                ref = {passwordRef}
                className=' bg-gray-500  text-black w-full rounded-l-lg outline-none'
              />

              <button
                onClick={()=>{copyToClipBoard()}}
                className='bg-blue-600 px-4 py-2 hover:bg-blue-900 rounded-r-lg'
              >
                Copy
              </button>
            </div>

            <div className='flex justify-evenly items-center flex-wrap text-2xl font-bold gap-3'>

              <div className='flex flex-wrap justify-evenly items-center gap-3'>
                <input 
                  type="range" 
                  min="6" 
                  max="25" 
                  onChange = {(e) => {
                    setLength(e.target.value)
                  }}
                />
                <label>Length: {length}</label>
              </div>

              <div className='flex gap-3'>
                <input 
                  type="checkbox" 
                  name="number" 
                  id="number" 
                  onChange = {() => {
                    setNumberAllowed((prev)=> !prev);
                  }} 
                />
                <label htmlFor="number">Number</label>
              </div>

              <div className='flex gap-3'>
                <input 
                  type="checkbox" 
                  name="special" 
                  id="special" 
                  onChange = {() => {
                    setSpecialAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="special">Special</label>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App