import Arsenal from '/arsenal.png'
import chelsea from '/chelsea.png'
import psg from '/psg.png'
import manCcity from '/man-city.png'
import { useState } from 'react'

const Teams = () => {

    const [team1Score, setTeam1Score] = useState(0)
    const [team2Score, setTeam2Score] = useState(0)

    let timeInterval = Math.floor(5000 + Math.random() * 15000)


    setInterval(()=>{
        setTeam1Score(prevTeam1Score => prevTeam1Score + 1)
        setTeam2Score(prevTeam1Score => prevTeam1Score + 1)
    }, timeInterval)






    return ( 
        <>

             <div className=' py-2 w-[20%] m-auto flex justify-center items-center gap-20'>

                  
                     <img src= {Arsenal} alt="" className=' h-36'/>
                    <span className='font-black text-amber-500 text-6xl'>{team1Score}</span>
                  

                    <h1 className='text-8xl font-black text-white'>VS</h1>

                     <span className='font-black text-amber-500 text-6xl'>{team2Score}</span>

                    <img src= {chelsea} alt="" className=' h-36'/>
            </div>


            <div className=' py-2 flex justify-center ml-20 items-center gap-32'>
                     <img src= {psg} alt="" className=' h-36'/>

                    <h1 className='text-8xl font-black text-white'>VS</h1>

                      <img src= {manCcity} alt="" className=' h-36'/>
            </div>
                  
                  
        </>
     );
}
 
export default Teams;