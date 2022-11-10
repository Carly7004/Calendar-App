import React from 'react'
import { CreateEventButton } from '../CreateEvent/CreateEventButton'
import { SmallCalendar } from '../SmallCalendar/SmallCalendar'

const Sidebar = () => {
  return (
    <aside className='border p-5 w-64'>
      <CreateEventButton/>
      <SmallCalendar/>
    </aside>
  )
}

export default Sidebar