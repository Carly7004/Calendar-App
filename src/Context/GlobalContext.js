import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 1,
    setmonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setsmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelect: (day) => {},
    showEventModal: false,
    setShowEventModal: (event) => {},
    dispatchCalEvent: (type, payload) => {},
    savedEvents: [],
    seletedEvent: null,
    setSeletedEvent: () => {}
})

export default GlobalContext