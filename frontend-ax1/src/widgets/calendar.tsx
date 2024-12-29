import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Calendar = (props: any) => {
  const _date = new Date();

  const [month, setMonth] = useState(_date.getMonth());
  const [year, setYear] = useState(_date.getFullYear());

  const nextMonth = () => {
    setMonth(month + 1);
    if (month >= 11) {
      setYear(year + 1);
      setMonth(0);
    }
  };

  const lastMonth = () => {
    setMonth(month - 1);
    if (month <= 0) {
      setMonth(11);
      setYear(year - 1);
    }
  };

  // TODO: To create a calendar
  const date = new Date();
  // INFO: This is to create and to know how many days in a month
  const bdate = new Date(year, month + 1, 0);
  // INFO: To know the first day of the week in a month
  const cdate = new Date([year, month + 1, 1]);

  const day = cdate.getDay();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // TODO: To store the days
  let dates = [];

  for (let i = 0; i < days.length; i++) {
    if (_date.getDay() === i && month === _date.getMonth()) {
      dates.push(
        <span className="font-bold text-white">
          <span className="bg-sky-500 p-[0.25rem] rounded-md">
            {days[i].substring(0, 3)}
          </span>
        </span>,
      );
    } else {
      dates.push(
        <span className="font-thin p-[0.25rem]">
          {days[i].substring(0, 3)}
        </span>,
      );
    }
  }

  for (let i = 1; i <= bdate.getDate() + day; i++) {
    if (i <= day) {
      dates.push(<span></span>);
    } else {
      if (
        _date.getMonth() === month &&
        i - day === _date.getDate() &&
        _date.getFullYear() === year
      ) {
        dates.push(
          <span className="font-bold text-white">
            <span className="bg-sky-500 p-[0.25rem] rounded-md">{i - day}</span>
          </span>,
        );
      } else {
        dates.push(
          <span className="font-thin text-sky-900">
            <span className="p-[0.25rem]">{i - day}</span>
          </span>,
        );
      }
    }
  }

  const calendar_ = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
  };

  return (
    <div className="flex flex-col p-2 select-none">
      <header className="flex flex-row justify-between items-center">
        <FontAwesomeIcon
          className="text-2xl"
          onClick={() => lastMonth()}
          icon={faArrowLeft}
        />
        <span>{`${months[month]} [${year}]`}</span>
        <FontAwesomeIcon
          className="text-2xl"
          onClick={() => nextMonth()}
          icon={faArrowRight}
        />
      </header>
      <div style={calendar_} className={`${props.className}`}>
        {dates}
      </div>
    </div>
  );
};

export default Calendar;
