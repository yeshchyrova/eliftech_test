import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getAllEvents = createAsyncThunk(
  "events/getAllEvents",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get("/");
      console.log("from data: ", data);
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
