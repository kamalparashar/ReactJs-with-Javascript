import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kamalparashar')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className=' m-4 px-2 py-4 bg-gray-300 flex justify-center items-start h-screen'>
        <div className=' mr-4'>
            <img className='block justify-center items-center border-gray-700 border-2 rounded-full m-4' src={data.avatar_url} alt=" Profile" width={300} />
            <h1 className='font-bold text-center'>{data.name}</h1>
        </div>
        
        <div className=' text-xl p-8 font-bold'>
            <h1>Name: <span className='text-nowrap'>{data.name}</span></h1>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p>GitHub Link: <a href="{data.html_url}">{data.html_url}</a></p>
        </div>
    </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    return response.json();
}