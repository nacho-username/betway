import Link from 'next/link'

type NavigationItem = {
  id: string
  title: string
  href: string
  accentColor: string
}

const Navbar = ({ nav, handleNavClick, activeNavItem }) => {
  return (
    <nav className='relative z-10 bg-zinc-800'>
      <ul className='w-full grid grid-cols-5 text-center'>
        {nav.map((item: any) => (
          <li
            key={item.id}
            className={`relative py-4 cursor-pointer ${
              item.id === activeNavItem.id
                ? 'text-white'
                : 'text-white opacity-80'
            }`}
            onClick={() => handleNavClick(item)}
          >
            <Link
              href={item.href}
              className=' text-xs transition ease-in-out duration-300'
            >
              {item.title}
            </Link>
            <span
              className={`absolute bottom-0 left-0 w-full h-1 transition  ease-in-out duration-300 ${
                activeNavItem.accentColor === item.accentColor
                  ? `scale-x-100`
                  : 'scale-x-0'
              }`}
              style={{ backgroundColor: `#${activeNavItem.accentColor}` }}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
