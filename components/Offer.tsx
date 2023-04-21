const Offer = ({ offer, activeNavItem, onOpenModal, handleMoneyAnimation }) => {
  const { text, subText, btnText } = offer[0]

  return (
    <div className='fixed bottom-0 w-full z-30'>
      <div className='flex flex-col items-center py-4 justify-start h-32 w-full bg-black opacity-80'>
        <span className='text-white text-light uppercase text-xs'>
          {subText}
        </span>
        <h3 className='text-xl text-white font-bold'>{text}</h3>
      </div>
      <button
        className='absolute bottom-0 left-[50%] -translate-x-[50%] z-10 mb-4 py-2 w-64 text-md text-white'
        style={{ backgroundColor: `#${activeNavItem.accentColor}` }}
        onClick={() => {
          onOpenModal('signup')
          handleMoneyAnimation()
        }}
      >
        {btnText}
      </button>
    </div>
  )
}
export default Offer
