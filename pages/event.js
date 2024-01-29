"use client";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { fromLunarDate } from "lunar-date-calculator";
import familyEvtList from "../familyEvt.json";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Event = () => {
  const [eventList, setEventList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024);

  useEffect(() => {
    setEventList(
      familyEvtList.map((evt, idx) => {
        return {
          flag: evt.flag,
          desc: evt.desc,
          year: fromLunarDate(parseInt(evt.year), parseInt(evt.month), parseInt(evt.day), selectedYear).year,
          month: fromLunarDate(parseInt(evt.year), parseInt(evt.month), parseInt(evt.day), selectedYear).month,
          day: fromLunarDate(parseInt(evt.year), parseInt(evt.month), parseInt(evt.day), selectedYear).day,
        };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear]);

  const onClickDay = (evt) => {
    let whoseEvent;
    if ((whoseEvent = eventList.find((x) => x.year + "-" + x.month + "-" + x.day === dayjs(evt).format("YYYY-M-D")))) {
      toast(whoseEvent.desc);
    }
  };

  return (
    <Container>
      <StyledToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={true}
      />
      <Calendar
        formatDay={(locale, date) => dayjs(date).format("DD")}
        locale="ko-kr"
        next2Label={null}
        prev2Label={null}
        onChange={(value) => {
          if (parseInt(dayjs(value).format("YYYY")) != selectedYear) {
            setSelectedYear(parseInt(dayjs(value).format("YYYY")));
          }
        }}
        onClickDay={onClickDay}
        tileContent={({ date, view }) => {
          if (eventList.find((x) => x.year + "-" + x.month + "-" + x.day === dayjs(date).format("YYYY-M-D"))) {
            return (
              <>
                <DotContainer>
                  <Dot />
                </DotContainer>
              </>
            );
          }
        }}
      />
      <CardContainer>
        {eventList.length > 0 &&
          eventList.map((evt, idx) => {
            return (
              <Card
                className=""
                key={idx}
              >
                <p>
                  {evt.flag ? "음력" : "양력"} : {familyEvtList[idx].month}-{familyEvtList[idx].day}
                </p>
                <p>{evt.desc}</p>
                {evt.flag == 1 && (
                  <p>
                    {selectedYear == evt.year ? selectedYear : evt.year}년 일자 :{" "}
                    {evt.month < 10 ? "0" + evt.month : evt.month}-{evt.day < 10 ? "0" + evt.day : evt.day}
                  </p>
                )}
              </Card>
            );
          })}
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1e1e22;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 45%;
  border-radius: 1.25rem;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  margin-bottom: 10px;
`;

const DotContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(16px, 5px);
`;

const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: tomato;
  border-radius: 50%;
  display: flex;
  margin-left: 1px;
`;

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 12px;
    background-color: black;
    color: white;
  }
`;

export default Event;
