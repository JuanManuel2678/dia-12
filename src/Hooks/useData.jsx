import { useEffect, useState } from "react"
import React from 'react'

const useData = () => {
    const [data, setData] = useState(filterItem) 

    async function getData() {
      const rs = await fetch('https://dummyjson.com/products')
      const rsJson = await rs.json();
    
    const filterItem = rsJson.products.map(items => ({
      id: items?.id,
      img: items?.images,
      title: items?.title, 
      price: items?.price,
      details: items?.description
    }))
      setData(filterItem)
     }
  
     useEffect(()=>{
      getData()
     }, [])
  
     
  return {
    filterItem,
    getData,
    data
  }
}

export default useData
