

export const ItemCard = ({item: {img, title, price, details, category, descont}}) => {
  return (
    <li className="rounded-lg w-[400px] h-[300px]  border-2 border-black flex  py-4 px-2 m-4 shadow-2xl  bg-gradient-to-r-from-sky-500 -to-indigo-500  dark:bg-gradient-to-r from-[#0d0d0d] to-[#333131ba]">
      <figure className=" flex items-center m-2" >
        <img src={img} alt="product img" className="w-[900px]  rounded-lg " />
      </figure>
     <div className="flex flex-col  justify-between text-center px-2 py-3 w-[900px]" >
     <h2 className="font-bold text-xl tracking-[1.5px]">{title}</h2>
      <p className="px-1 text-[12.5px] text-gray-600 m-1 dark:text-white">{category}</p>
      <span>{descont}</span>
      <button className="dark:bg-gradient-to-r from-[#565050] to-[black] bg-[#133e13] text-[white] font-bold font text-[25px] rounded-lg">${price}</button>
     </div>
    </li>
  )
}
