import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

const CalendarHearder = () => {
  const { monthIndex, setmonthIndex } = useContext(GlobalContext);

  const previousMonthHandler = () => {
    setmonthIndex(monthIndex - 1);
  };

  const nextMonthHandler = () => {
    setmonthIndex(monthIndex + 1);
  };

  const resetMonthIndex = () => {
    setmonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };
  return (
    <header className="px-4 py-4 flex items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4206/4206324.png"
        alt="calendar"
        className="mr-2 w-8 h-8"
      />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Calendar</h1>
      <button
        onClick={resetMonthIndex}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={previousMonthHandler}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={nextMonthHandler}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHearder;
