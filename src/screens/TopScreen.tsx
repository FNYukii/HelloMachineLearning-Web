import { NavLink } from 'react-router-dom'
import Screen from '../components/Screen'
import { BsImage } from 'react-icons/bs'

function TopScreen() {

  return (
    <Screen title='Top'>

      <div className='flex'>

        <NavLink to="/image-classifier">

          <div className='w-fit p-8 rounded-md bg-gray-100 hover:brightness-95 transition'>

            <div className='flex flex-col gap-2'>

              <BsImage className='text-gray-500 text-3xl mx-auto' />
              <span className='font-bold'>Image Classifier</span>
            </div>
          </div>
        </NavLink>
      </div>
    </Screen>
  )
}

export default TopScreen