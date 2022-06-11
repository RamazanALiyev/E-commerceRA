import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null, 
}

export const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
   checkstatus : (state,action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { checkstatus } = RegisterSlice.actions

export default RegisterSlice.reducer