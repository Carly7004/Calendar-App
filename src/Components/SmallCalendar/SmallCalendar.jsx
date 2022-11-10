import dayjs from "dayjs";
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { getMonth } from "../../util/util";

export const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const { monthIndex, setsmallCalendarMonth, daySelected, setDaySelect } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  const previousMonthHandler = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const nextMonthHandler = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const getcurrentDayClass = (day) => {
    const format = "DD.MM.YYYY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  };

  //   const getcurrentDayClass = (day) => {
  //     return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")
  //       ? "bg-blue-600 text-white rounded-full w-7"
  //       : "";
  //   };

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
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
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setsmallCalendarMonth(currentMonthIndex);
                  setDaySelect(day);
                }}
                className={`py-1 w-full ${getcurrentDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
