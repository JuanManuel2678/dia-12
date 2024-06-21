
export const Card = ({id}) => {
  return (
    <li className="">
      <img src={`https://picsum.photos/200/300?random=${id}`} alt="" className="rounded-lg w-[180px] " />
    </li>
  )
}


 