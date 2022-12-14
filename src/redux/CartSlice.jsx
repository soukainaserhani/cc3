import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarte = createAsyncThunk("CartSlice/getCart", async () => {
  const response = await axios.get("https://dummyjson.com/carts");
  return response.data;
});




export default CartSlice;