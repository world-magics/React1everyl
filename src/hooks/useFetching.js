import { useState } from "react";

export const useFetching=(callback)=>{
  const [isLoading,setIsLoading]=useState(false)
  const [erorr,setErorr]=useState("")
  const fetching=async()=>{
    try{
        setIsLoading(true)
        await callback()
    } catch(e){
        setErorr(e.message)
    } finally{
        setIsLoading(false)
    }
  }

  return [fetching,isLoading,erorr]

}