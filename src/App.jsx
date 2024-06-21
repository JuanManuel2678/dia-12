import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { ItemList } from "./components/ItemList"
import { Services } from "./components/Services"
import { ItemCard } from "./components/ItemCard"
import useData from "./Hooks/useData"




function App() {
  const {filterItem, getData, data } = useData
  const [theme, setTheme] = useState('light')
 

  return (
    <>
    <Header />
    <Services />
    <ItemList>
    {data && data.map(item => (
       <ItemCard 
       key={item.id}
       item={item}/> 
      ))
    }
    </ItemList>
     {/* <div className="w-full max-w-screen-lg mx-auto min-h-screen bg-slate-600 flex gap-4 flex-wrap object p-8 ">
      <div className="sm:min-w-60 sm_max-72 h-72 bg-fuchsia-400 flex-shrink-0 flex-grow w-full"></div>
      <div className="sm:min-w-60 sm_max-72 h-72 bg-fuchsia-500 flex-shrink-0 flex-grow w-full"></div>
      <div className="sm:min-w-60 sm_max-72 h-72 bg-fuchsia-600 flex-shrink-0 flex-grow w-full"></div>
      <div className="sm:min-w-60 sm_max-72 h-72 bg-fuchsia-700 flex-shrink-0 flex-grow w-full"></div>
     </div> */}
    </>
  )
}

export default App
