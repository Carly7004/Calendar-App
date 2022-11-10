import React from 'react'
import Day from '../Day/Day'

const Month = ({month}) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {month.map((row, i) => (
            <React.Fragment key={i}>
                {row.map((day, index) => (
                    <Day day={day} key={index} rowidx={i}/>
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}

export default Month