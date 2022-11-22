import dayjs from "dayjs";
import React, { useState, useEffect, useReducer } from "react";
import GlobalContext from "./GlobalContext";

const savedEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

const initEvents = (state, payload) => {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

const ContextWrapper = (props) => {
  const [monthIndex, setmonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setsmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelect] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [seletedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

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
        setShowEventModal,
        dispatchCalEvent,
        savedEvents,
        seletedEvent,
        setSelectedEvent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
