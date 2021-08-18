import { useEffect, useRef } from "react"
import './toast.css'
export function Toast({msg,setToast}){
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
            setToast('')
        },1000)
        return()=>{
            clearTimeout(timeOut)
        } 
    },[])
    return (
        <div className='toast'>
            <h5>{msg}</h5>
        </div>
    )
}