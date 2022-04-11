import { createSlice } from "@reduxjs/toolkit";

interface typeFormDataState {
  fName: string;
  lName: string;
  mName: string;
  email: string;
  address: string;
  pNo: number;
  age: number;
  gender: string;
}

const initialState: typeFormDataState = {
  fName: "",
  lName: "",
  mName: "",
  email: "",
  address: "",
  pNo: 0,
  age: 0,
  gender: "",
};

const formDataSlice = createSlice({
  name: "allFormData",
  initialState,
  reducers: {
    firstName: (state, action) => {
      state.fName = action.payload;
    },
    middleName: (state, action) => {
      state.mName = action.payload;
    },
    lastName: (state, action) => {
      state.lName = action.payload;
    },
    emailAddress: (state, action) => {
      state.email = action.payload;
    },
    address: (state, action) => {
      state.address = action.payload;
    },
    phoneNumber: (state, action) => {
        state.pNo = action.payload;
    },
    age: (state, action) => {
        state.age = action.payload;
    },
    gender: (state, action) => {
        state.gender = action.payload;
    },
  },
});


export const {
    firstName, 
    middleName, 
    lastName,
    emailAddress, 
    address, 
    phoneNumber, 
    age, 
    gender
} = formDataSlice.actions;

export default formDataSlice.reducer;