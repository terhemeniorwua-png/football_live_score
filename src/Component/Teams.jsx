import Arsenal from '/arsenal.png'
import chelsea from '/chelsea.png'
import psg from '/psg.png'
import manCcity from '/man-city.png'
import { useEffect, useState } from 'react'

const Teams = () => {

     const [team1Score, setTeam1Score] = useState(0)
    const [team2Score, setTeam2Score] = useState(0)

        const [team1Score1, setTeam1Score1] = useState(0)
    const [team2Score2, setTeam2Score2] = useState(0)

    let [matchTimer, setMatchTimer] = useState(0)

    

   useEffect(()=>{
    if(matchTimer >= 50){

    setTeam1Score1(team1Score)
    setTeam2Score2(team2Score)

    setMatchTimer(0)
    setTeam1Score(0)
    setTeam2Score(0)
  

    
 }
   }, [matchTimer])


   useEffect(()=>{
    
    let interval = setInterval(()=>{
        setMatchTimer(prevMatchTimer => prevMatchTimer + 1 )
    }, 1000)

    return ()=>clearInterval(interval)
   }, [])

    

    useEffect(()=>{

            
        let timeInterval2 = Math.floor(10000 + Math.random() * 25000)
        let timeInterval = Math.floor(10000 + Math.random() * 25000)

        let interval1;
        let interval2;

         const arsenalGoal = () =>{

        interval1 = setTimeout(()=>{
            
         setTeam2Score(prevTeam1Score => prevTeam1Score + 1)
            arsenalGoal()
        }, timeInterval2)
 }

 const chelseaGoal = () =>{

    interval2 = setTimeout(()=>{
        setTeam1Score(prevTeam1Score => prevTeam1Score + 1)
    chelseaGoal()

    }, timeInterval)

   
        
 }

  arsenalGoal()
    chelseaGoal()


    return ()=>{
        clearInterval(interval1)
        clearInterval(interval2)
    
    }
   
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



    return ( 
        <>
        <p className='mt-32 text-white text-center text-4xl'>Time: {matchTimer}</p>

       <div>
              <div className=' py-2 w-[20%] m-auto flex  justify-center items-center gap-20'>

                  
                     <img src= {Arsenal} alt="" className=' h-36'/>
                    <span className='font-black text-amber-500 text-6xl'>{team1Score}</span>
                  

                    <h1 className='text-8xl font-black text-amber-300'>VS</h1>

                     <span className='font-black text-amber-500 text-6xl'>{team2Score}</span>

                    <img src= {chelsea} alt="" className=' h-36'/>
            </div>

            <div className='text-white text-center space-y-5 pt-5'>
               <h2 className='text-4xl font-black'> Match statistic</h2>

                <p>Arsenal {team1Score1} <span className='text-2xl text-amber-400'>|</span> Chelsea {team2Score2}</p>
            </div>
       </div>


                  
        </>
     );
}
 
export default Teams;