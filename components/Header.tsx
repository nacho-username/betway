import Image from 'next/image'

const Header = ({ onOpenModal, handleCloseModal }) => {
  return (
    <header className='relative z-30 bg-black shadow w-full'>
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
            <a
              onClick={() => onOpenModal('login')}
              href='#'
              className='border border-betway-green bg-betway-green text-white hover:bg-white hover:text-betway-green hover:border-white px-4 py-2 text-xs font-medium'
            >
              Login
            </a>
            <a
              onClick={() => onOpenModal('signup')}
              href='#'
              className='border bg-white text-betway-green hover:border-betway-green hover:text-betway-green hover:bg-transparent  px-4 py-2 ml-2 text-xs font-medium'
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
