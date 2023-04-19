import { useState } from 'react';
import './style.css'

function NormalClock (){
    const [hour, setHour] =useState('00')
    const [minutes, setMinutes] =useState('00')
    const [seconds, setSeconds] =useState('00')

const interval = setInterval(()=>{
    const date = new Date()
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    setHour(h)
    setMinutes(m)
    setSeconds(s)
},1000)


const date = new Date()
const h = date.getHours()
const m = date.getMinutes()
const s = date.getSeconds()

return(
    <div className='clock'>
            <div className='progress-go' />
            <p className='status'>Reloj</p>
            {/* <p>{name}</p>
            <p>{name2}</p> */}

            <span>
                <span className='hour'>{hour}:</span>
                <span className='minute'>{minutes}:</span>
                <span className='minute'>{seconds}</span>
            </span>
        </div>
)


}

export default NormalClock