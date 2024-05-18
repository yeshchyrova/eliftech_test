"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "./redux/selectors";
import { getAllEvents } from "./redux/operations";

const BoardPage = () => {
  const events = useSelector(getEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <section className="px-[20px]">
      <h1 className="mb-5 text-2xl mt-7 ml-5">Events</h1>
      <ul className="flex flex-wrap justify-around gap-y-9">
        {events?.data?.map((event) => (
          <li
            key={event._id}
            className="w-[22%] h-[185px]  border-2 border-black p-5 relative"
          >
            <p className="mb-2">{event.title}</p>
            <p className="text-sm h-[50px] mb-8">
              {setDesc(event.description)}
            </p>
            <div className="flex justify-between">
              <Link href={`registration/${event._id}`}>Register</Link>
              <Link href={`participants/${event._id}`}>View</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const setDesc = (title) => {
  return title.length > 108 ? title.slice(0, 108) + "..." : title;
};

export default BoardPage;
