import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AnimateMoney = ({ moneyAnimate }) => {
  return (
    <div
      className={`${
        !moneyAnimate && 'hidden'
      } px-12 absolute z-20 h-screen w-full flex justify-between`}
    >
      <FontAwesomeIcon
        icon={faMoneyBill}
        className='w-6 h-6 text-betway-green animate-fall'
      />
      <FontAwesomeIcon
        icon={faMoneyBill}
        className='w-6 h-6 mt-12 text-betway-green animate-fall'
      />
      <FontAwesomeIcon
        icon={faMoneyBill}
        className='w-6 h-6 mt-36 text-betway-green animate-fall'
      />
      <FontAwesomeIcon
        icon={faMoneyBill}
        className='w-6 h-6 text-betway-green animate-fall'
      />
    </div>
  )
}
export default AnimateMoney
