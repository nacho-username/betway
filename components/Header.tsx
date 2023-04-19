import Image from 'next/image'

const Header = () => {
  return (
    <header className='bg-black shadow w-full'>
      <div className='max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Image
              className='block h-8 w-auto'
              src='/assets/Betway_White.png'
              alt='Betway Logo'
              width={100}
              height={50}
            />
          </div>
          <div className='flex items-center'>
            <div className=''>
              <a
                href='#'
                className='bg-betway-green text-white hover:bg-white hover:text-betway-green px-4 py-2 text-xs font-medium'
              >
                Login
              </a>
              <a
                href='#'
                className='bg-white text-betway-green hover:betway-green hover:text-white  px-4 py-2 ml-2 text-xs font-medium'
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
