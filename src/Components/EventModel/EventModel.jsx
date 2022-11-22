import React, { useContext, useState } from "react";
import GlobalContext from "../../Context/GlobalContext";

const colorLabelClasses = [
  "pink",
  "orange",
  "gray",
  "green",
  "blue",
  "red",
  "yellow",
  "purple",
];

export const EventModel = () => {
  const { setShowEventModal, daySelected, dispatchCalEvent, seletedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(seletedEvent ? seletedEvent.title : "");
  const [desc, setDesc] = useState(seletedEvent ? seletedEvent.desc : "");

  const [selectedColorLabel, setSelectedColorLabel] = useState(
    seletedEvent
      ? colorLabelClasses.find((label) => label === seletedEvent.label)
      : colorLabelClasses[0]
  );

  const submitHandleer = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      desc,
      label: selectedColorLabel,
      day: daySelected.valueOf(),
      id: seletedEvent ? seletedEvent.id : Date.now(),
    };
    if (seletedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {seletedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: seletedEvent });
                  setShowEventModal(false)
                }}
                className="material-icons-outlined text-gray-400"
              >

                  delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              placeholder="add title"
              name="title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-lg font-semibold pb-2 w-full border-gray-200 border-b-2 focus:outlined-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              placeholder="add description"
              name="desc"
              value={desc}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-gray-200 border-b-2 focus:outlined-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDesc(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {colorLabelClasses.map((labelClass, idx) => (
                <span
                  key={idx}
                  onClick={() => {
                    setSelectedColorLabel(labelClass);
                  }}
                  className={`bg-${labelClass}-500 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedColorLabel === labelClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={submitHandleer}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            save
          </button>
        </footer>
      </form>
    </div>
  );
};
