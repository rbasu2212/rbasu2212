import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    data: null,
    loading: false,
    error: null,
    users: {},
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addValue: (state, action) => {
      state.count += action.payload;
    },
    fetchDataRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    sendData: {
      reducer(state, action) {
        return {
          ...state,
          users: action.payload,
        }
      },
      prepare(name, age) {
        return {
          payload: { name, age },
        };
      },
    },
  },
});

export const {
  increment,
  decrement,
  addValue,
  sendData,
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} = CounterSlice.actions;
export default CounterSlice.reducer;
