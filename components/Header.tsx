const Header = () => {
  return (
    <header className='bg-black shadow w-full'>
      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <img
              className='block h-8 w-auto'
              src='/assets/Betway_White.png'
              alt=''
            />
          </div>
          <div className='flex items-center'>
            <div className='hidden md:block'>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Login
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
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
