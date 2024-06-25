import { useEffect, useState } from "react"

const useData = () => {
    const [data, setData] = useState([]) 

    async function getData() {
      const rs = await fetch('https://dummyjson.com/products?limit=200')
      const rsJson = await rs.json();
    
    const filterItem = rsJson.products.map(items => ({
      id: items?.id,
      img: items?.images,
      title: items?.title, 
      price: items?.price,
      details: items?.description,
      category: items?.category,
      descont: items?.discountPercentage,
    }))
      setData(filterItem)
     }
  
     useEffect(()=>{
      getData()
     }, [])
  
     
  return {
    data
  }
}

export default useData
