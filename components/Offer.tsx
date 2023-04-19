const Offer = () => {
  return (
    <div className='absolute bottom-0 w-full'>
      <div className='flex flex-col items-center py-4 justify-start h-32 w-full bg-black opacity-80'>
        <span className='text-white text-light uppercase text-xs'>
          Sports New Customer Offer
        </span>
        <h3 className='text-xl text-white font-bold'>
          Get up to £10 in Free Bets
        </h3>
      </div>
      <button className='absolute bottom-0 left-[50%] -translate-x-[50%] z-10 bg-betway-green mb-4 py-2 w-64 text-md text-white hover:bg-white hover:text-betway-green'>
        Join Now
      </button>
    </div>
  )
}
export default Offer
