import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'sports', href: '#', color: 'betway-green' },
  { name: 'live & real', href: '#', color: 'betway-live' },
  { name: 'casino', href: '#', color: 'betway-casino' },
  { name: 'esports', href: '#', color: 'betway-esports' },
  { name: 'vegas', href: '#', color: 'betway-vegas' },
]

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0)
  const [itemColor, setItemColor] = useState(null)

  return (
    <nav className='bg-zinc-800 flex justify-between items-center '>
      <ul className='flex items-center justify-around w-full'>
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className={`relative py-4 ${
              index === activeItem ? 'text-white' : 'text-white opacity-80'
            }`}
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(0)}
            onClick={() => setItemColor(item.color)}
          >
            <Link
              href={item.href}
              className=' text-xs transition ease-in-out duration-300'
            >
              {item.name}
            </Link>
            <span
              className={`absolute bottom-0 left-0 w-full h-1 transition  ease-in-out duration-300 ${
                index === activeItem ? 'scale-x-100' : 'scale-x-0'
              } ${itemColor === item.color ? `bg-${item.color}` : ''}`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
