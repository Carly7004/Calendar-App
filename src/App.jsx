import React, { useState, useEffect, useContext } from "react";
import CalendarHearder from "./Components/Calendar/CalendarHearder";
import { EventModel } from "./Components/EventModel/EventModel";
import Month from "./Components/Month/Month";
import Sidebar from "./Components/Sidebar/Sidebar";
import GlobalContext from "./Context/GlobalContext";
import { getMonth } from "./util/util";


function App() {
  const [currentMonth, setcurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setcurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
    { showEventModal && <EventModel/>}
      <div className="h-screen flex flex-col">
        <CalendarHearder />
        <div className=" flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
