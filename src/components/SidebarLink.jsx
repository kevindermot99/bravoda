import React from 'react'
import { Link } from 'react-router-dom'

function SidebarLink({to, icon, name}) {
  return (
    <Link to={to} className='flex items-center justify-start gap-2 w-full h-[30px] hover:bg-stone-200 dark:hover:bg-dark-hover-color rounded-lg px-3'>
        <span className='text-lg opacity-50'>{icon}</span>
        <span className='text-sm font-medium'>{name}</span>
    </Link>
  )
}

export default SidebarLink