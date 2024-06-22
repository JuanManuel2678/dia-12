import React from 'react'

export const ItemList = ({children}) => {
  return (
    <ul className="grid gap-2 grid-cols-3 grid-rows-3  py-4 px-4  dark:bg-slate-600 dark:text-white dark:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZndrvTWkjX91DRPskikSXy7AJKRPqZvJjKusk_DYeBIvdEj8_sVkI3cXvAoolQuCPjIM&usqp=CAU')]">
      {children}
    </ul>
  )
}

