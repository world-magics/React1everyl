import React, { useMemo } from 'react'

export const useSortInforms = (informs,sort) => {
    const  sortedInform=useMemo(()=>{
        // console.log("first")
        if(sort){
          return [...informs].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return informs
      },[sort,informs])
      return sortedInform;
}
export const useInforms=(informs,sort,query)=>{
    const sortedInforms=useSortInforms(informs,sort);
    const sortedSearchAndInform=useMemo(()=>{
        return sortedInforms.filter(inform=>inform.firstname.toLowerCase().includes(query.toLowerCase()))
    },[query,sortedInforms])

    return sortedSearchAndInform;
}
