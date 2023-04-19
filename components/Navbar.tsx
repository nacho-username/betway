import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'sports', href: '#' },
  { name: 'live & real', href: '#' },
  { name: 'casino', href: '#' },
  { name: 'esports', href: '#' },
  { name: 'vegas', href: '#' },
]

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <nav className='relative z-10 bg-zinc-800'>
      <ul className='w-full grid grid-cols-5 text-center'>
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className={`relative py-4 ${
              index === activeItem ? 'text-white' : 'text-white opacity-80'
            }`}
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(0)}
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
              } bg-betway-green`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
