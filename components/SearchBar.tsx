import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <div className='md:flex items-center gap-2 hidden rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md w-full'>
        
        <Search className='w-4 h-4 text-orange-500'/>
    <input id='search' placeholder='Search...' className='text-sm outline-0 w-full' />
    </div>
  )
}
