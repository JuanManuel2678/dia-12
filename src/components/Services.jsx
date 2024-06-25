import { Card } from "./Card";

export const Services = () => {
  return (
    <section
      role="hero"
      className="grid grid-cols-2 w-full h-[calc(100vh-40px)] py-4 mb-4 dark:text-white dark:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkiY9ssmcY0FbQ4IvAnGzwDMY3GysHaNJQw3uNTj_R2rE44-PKkBIcto16W1MqB1BXmk&usqp=CAU')]"
    >
      <article className="w-full h-full flex flex-col text-left py-14 px-14 items-center justify-center gap-6 justify-items-start">
        <h1 className="p-[10px] font-Fraunces text-[50px] font-bold uppercase text-black text-left w-[500px] dark:text-[white]">
          Summer Styles are finally here
        </h1>
        <p className="text-[#9b9292] text-[20px] dark:text-white">
          This year, our new summer colletion will shelter you from the harsh
          element of a world that doesnt care if you live or die.
        </p>
        <button className=" bg-[#491fdf] px-8 py-2 text-white rounded-lg cursor-pointer hover:bg-[white] hover:text-[black] dark:bg-gradient-to-r from-[#565050] to-[black]">
          Shop Colletion
        </button>
      </article>
      <article className=" dark:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkiY9ssmcY0FbQ4IvAnGzwDMY3GysHaNJQw3uNTj_R2rE44-PKkBIcto16W1MqB1BXmk&usqp=CAU')] ">
        <ul ul className="w-full h-full grid grid-cols-3 grid-rows-12">

        <li className="w-full h-full row-span-6 row-start-2">
          <img src={`https://picsum.photos/id/0/200/300`} alt="" className="rounded-lg w-[180px]"/>
        </li>
        <li className="w-full h-full row-span-6 col-start-2"> 
          <img src={`https://picsum.photos/id/1/200/300`} alt="" className="rounded-lg w-[180px] "/>
        </li>
        <li className="w-full h-full row-span-6 col-start-3 row-start-2">
          <img src={`https://picsum.photos/id/2/200/300`} alt="" className="rounded-lg w-[180px]"/>
        </li>
        <li className="w-full h-full row-span-6 row-start-8 col-start-1">
          <img src={`https://picsum.photos/id/3/200/300`} alt="" className="rounded-lg w-[180px]"/>
        </li>
        <li className="w-full h-full row-span-6 col-start-2">
          <img src={`https://picsum.photos/id/4/200/300`} alt="" className="rounded-lg w-[180px]"/>
        </li>
        <li className="w-full h-full row-span-6 col-start-3 row-start-8 ">
          <img src={`https://picsum.photos/id/5/200/300`} alt="" className="rounded-lg w-[180px]"/>
        </li>
        <li className="w-full h-full row-span-6 col-start-2 row-start-7">
          <img src={`https://picsum.photos/id/6/200/300`} alt=""  className="rounded-lg w-[180px]"/>
        </li> 

       </ul>
      </article>
    </section>
  ); 
};



{/* <Card style="w-full h-full row-start-2" id={445} />
<Card style="w-full h-full row-span-6 cols-start-2" id={446} />
<Card style="w-full h-full row-span-6 col-start-3 row-start-2" id={447}/>
<Card style="w-full h-full row-span-6 row-start-8 col-start-1" id={448}/>
<Card style="w-full h-full row-span-6 col-start-2" id={449} />
<Card style="w-full h-full row-span-6 col-start-3 row-start-8" id={450}/>
<Card style="w-full h-full row-span-6 col-start-2 row-start-7" id={451}/> */}
// flex justify-around justify-items-center
// flex flex-col justify-between mt-[100px] font-Fraunces text-[20px] uppercase tracking-[6.25px] text-black text-left w-[200px] top-[144px] left-0 right-0
