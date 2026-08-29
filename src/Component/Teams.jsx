import Arsenal from '/arsenal.png'
import chelsea from '/chelsea.png'
import psg from '/psg.png'
import manCcity from '/man-city.png'
import { useEffect, useState } from 'react'

const Teams = () => {

    const [team1Score, setTeam1Score] = useState(0)
    const [team2Score, setTeam2Score] = useState(0)

    

    useEffect(()=>{
        setInterval(()=>{
            let timeInterval = Math.floor(1000 + Math.random() * 5000)

    setTimeout(()=>{
        setTeam2Score(prevTeam1Score => prevTeam1Score + 1)
    }, timeInterval)
        }, 7000)
     
    }, [])


    useEffect(()=>{
    setInterval(()=>{
        let timeInterval2 = Math.floor(1000 + Math.random() * 5000)

         setTimeout(()=>{
        setTeam1Score(prevTeam1Score => prevTeam1Score + 1)
    }, timeInterval2)
    }, 5000)
    
   
     
    }, [])



    //     const [team3Score, setTeam3Score] = useState(0)
    // const [team4Score, setTeam4Score] = useState(0)

    // useEffect(()=>{
    //     let timeInterval4 = Math.floor(7000 + Math.random() * 10000)
    // let timeInterval3 = Math.floor(7000 + Math.random() * 12000)


    // setInterval(()=>{
    //     setTeam3Score(prevTeam1Score => prevTeam1Score + 1)
    // }, timeInterval3)

    //  setInterval(()=>{
    //     setTeam4Score(prevTeam1Score => prevTeam1Score + 1)
    // }, timeInterval4)
    // }, [])


    const matchtiming = Date().iso



    return ( 
        <>
        <h1 className='mt-32 text-white'>{matchtiming}</h1>

             <div className=' py-2 w-[20%] m-auto flex  justify-center items-center gap-20'>

                  
                     <img src= {Arsenal} alt="" className=' h-36'/>
                    <span className='font-black text-amber-500 text-6xl'>{team1Score}</span>
                  

                    <h1 className='text-8xl font-black text-white'>VS</h1>

                     <span className='font-black text-amber-500 text-6xl'>{team2Score}</span>

                    <img src= {chelsea} alt="" className=' h-36'/>
            </div>

{/* 
            <div className=' py-2 flex justify-center ml-20 items-center gap-32'>
                     <img src= {psg} alt="" className=' h-36'/>

                     <span className='font-black text-amber-500 text-6xl'>{team3Score}</span>

                    <h1 className='text-8xl font-black text-white'>VS</h1>

                    <span className='font-black text-amber-500 text-6xl'>{team4Score}</span>

                      <img src= {manCcity} alt="" className=' h-36'/>
            </div>
                   */}
                  
        </>
     );
}
 
export default Teams;