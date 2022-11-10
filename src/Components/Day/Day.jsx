import dayjs from "dayjs";
import React from "react";

const Day = ({ day, rowidx }) => {
  const getcurrentDayClass = () => {
    return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  console.log(day);
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowidx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getcurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};

export default Day;
