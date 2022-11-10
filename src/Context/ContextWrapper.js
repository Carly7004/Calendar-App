import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
  const [monthIndex, setmonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setsmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelect] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setmonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setmonthIndex,
        smallCalendarMonth,
        setsmallCalendarMonth,
        daySelected,
        setDaySelect,
        showEventModal,
        setShowEventModal
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
