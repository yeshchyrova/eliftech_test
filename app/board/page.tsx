"use client";
import React from "react";
import events from "../../boardList.json";
import Link from "next/link";

const setDesc = (title: string) => {
  return title.length > 108 ? title.slice(0, 108) + "..." : title;
};

const BoardPage = () => {
  return (
    <section className="px-[20px]">
      <h1 className="mb-5 text-2xl mt-7 ml-5">Events</h1>
      <ul className="flex flex-wrap justify-around gap-y-9">
        {events.map((event) => (
          <li
            key={event.id}
            className="w-[22%] h-[185px]  border-2 border-black p-5 relative"
          >
            <p className="mb-2">{event.title}</p>
            <p className="text-sm h-[50px] mb-8">
              {setDesc(event.description)}
            </p>
            <div className="flex justify-between">
              <Link href={`registration/${event.id}`}>Register</Link>
              <Link href={`participants/${event.id}`}>View</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BoardPage;
