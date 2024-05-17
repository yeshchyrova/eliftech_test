"use client";
import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents } from "./operations";
import { getAllEventsFulfilled } from "../helpers";
const eventSlice = createSlice({
  name: "events",
  initialState: { eventsList: [] },
  extraReducers: (builder) => {
    builder.addCase(getAllEvents.fulfilled, getAllEventsFulfilled);
  },
});

export const eventsReducer = eventSlice.reducer;
// {
//     getEvents(state, action) {},
//     registerForEvent(state, action) {},
//     getAllRegisteredUsers(state, action) {},
//   },
