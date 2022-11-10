import React, {useContext} from 'react'
import GlobalContext from '../../Context/GlobalContext'


export const CreateEventButton = () => {
  const {setShowEventModal} = useContext(GlobalContext)
  return (
    <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXctPw8hUyBeHLFldKi-AAZlTXGpCtxChdm9J8_yw5mJjny-VVUX7IeChqxBL8Jy9fX7Q&usqp=CAU" alt="create-event" className='w-5 h-5' />
        <span className='pl-2 pr-5'>Create Event</span>
    </button>
  )
}
