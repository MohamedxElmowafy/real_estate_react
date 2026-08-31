import { createAsyncThunk } from "@reduxjs/toolkit";

export const propertyApi =
  "https://my-json-server.typicode.com/coveliving/dummy-api/listings";

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const response = await fetch(propertyApi);
    return await response.json();
  }
);
