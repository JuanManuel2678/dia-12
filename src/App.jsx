import { Header } from "./components/Header"
import { ItemList } from "./components/ItemList"
import { Services } from "./components/Services"
import { ItemCard } from "./components/ItemCard"
import useData from "./Hooks/useData"




function App() {
  const { data} = useData()


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
    </>
  )
}

export default App
