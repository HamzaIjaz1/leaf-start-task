import React, { FC, useState } from "react";
import { Calendar as CalendarComponent } from "antd";
import { CalendarWrapper } from "./calendar.styled";
import { AddEventButton } from "../Buttons";
import { EventPopup } from "../Event";
const Calendar: FC = ({}) => {
  const [showEventPopup, setShowEventPopup] = useState(false);
  const handleToggleEventPopup = () => {
    setShowEventPopup(!showEventPopup);
  };
  return (
    <CalendarWrapper>
      <h1>Calendar</h1>
      <AddEventButton handleButtonClick={handleToggleEventPopup} />
      {showEventPopup && (
        <EventPopup handleToggleEventPopup={handleToggleEventPopup} />
      )}
      <CalendarComponent />
    </CalendarWrapper>
  );
};

export default Calendar;
