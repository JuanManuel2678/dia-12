import { Card } from "./Card"


export const Services = () => {
  return (
    <section className="grid grid-cols-2 w-full h-[calc(100vh-56px) ]  dark:bg-slate-600 dark:text-white ">


     <article className="w-full h-full text-left py-14 px-14 items-center justify-center gap-6 flex flex-col  justify-items-start">

       <h1 className="p-[10px] font-Fraunces text-[50px] font-bold uppercase text-black text-left  w-[500px]">Summer  Styles are   finally here</h1>
       <p className="text-[#9b9292] text-[20px] ">This year, our new summer colletion will shelter you from the harsh element of a world that doesnt care if you live or die.</p>
       <button className=" bg-[#491fdf] px-8 py-2 text-white rounded-lg cursor-pointer hover:bg-[] border-2 border-black items-">Shop Colletion</button>

     </article>


    <article className="w-full h-full flex justify-around">
      <ul className="grid grid-cols-3 gap-4 mt-[100px] ">
        <Card className='col-start-2' id={1}/>
        <Card id={2}/>
        <Card id={3}/>
        <Card id={4}/>
        <Card id={5}/>
        <Card id={6}/>
        <Card id={7}/>
        <Card id={8}/>
      </ul>
    </article>

      
    </section>
  ) 
}


// flex flex-col justify-between mt-[100px] font-Fraunces text-[20px] uppercase tracking-[6.25px] text-black text-left w-[200px] top-[144px] left-0 right-0