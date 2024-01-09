import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const lunarEvent = [
  {
    date: "01-12",
    desc: "할머니 생신",
  },
  {
    date: "02-25",
    desc: "외할아버지 생신",
  },
  {
    date: "03-23",
    desc: "아빠 생신",
  },
  {
    date: "04-03",
    desc: "외할머니 생신",
  },
  {
    date: "08-03",
    desc: "이모 생신",
  },
  {
    date: "09-04",
    desc: "이모부 생신",
  },
  {
    date: "10-08",
    desc: "엄마 생신",
  },
  {
    date: "11-07",
    desc: "할아버지 제사",
  },
  {
    date: "11-25",
    desc: "삼촌 생신",
  },
  {
    date: "12-13",
    desc: "외삼촌 생신",
  },
];

const solarEvent = [
  {
    date: "03-26",
    desc: "김유신 생일",
  },
  {
    date: "05-23",
    desc: "박철오 생일",
  },
  {
    date: "08-11",
    desc: "김유진 생일",
  },
  {
    date: "10-07",
    desc: "강준영 생일",
  },
  {
    date: "10-27",
    desc: "박한솔 생일",
  },
];

const Event = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Calendar />
      </div>
      <div className="tt">
        {lunarEvent.map((evt) => {
          return (
            <div
              className=""
              key={evt.date}
            >
              <p>음력 : {evt.date}</p>
              <p>{evt.desc}</p>
            </div>
          );
        })}
        {solarEvent.map((evt) => {
          return (
            <div
              className=""
              key={evt.date}
            >
              <p>양력 : {evt.date}</p>
              <p>{evt.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
