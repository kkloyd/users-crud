import { createSlice } from "@reduxjs/toolkit"

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      console.info(action)
      state.value += 1
    },
  },
})

export const { increment, decrement, incrementByAmount } = usersSlice.actions

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = state => state.counter.value

export default usersSlice.reducer
