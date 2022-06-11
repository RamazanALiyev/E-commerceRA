import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from '../src/Features/BasketSlice'
import productsSlice from '../src/Features/AllSlice'
import PhoneSlice from '../src/Features/PhoneSlice'
import CategorySlice from './Features/CategorySlice'
import counterSlice from './Features/Counter'
import  RegisterSlice  from './Features/RegisterStatus'
import AccessuarSlice from "./Features/AccessuarSlice"
import PaymentSlice from "./Features/PaymentInfo";
import PersonalInfo from "./Features/PersonalInfo";
import FilterSlice from './Features/Filtered';






export const store = configureStore({
  reducer: {
      basket : BasketReducer,
      products: productsSlice,
      phones : PhoneSlice,
      accessuar : AccessuarSlice,
      categories : CategorySlice,
      counter: counterSlice,
      registerStatus : RegisterSlice,
      payment : PaymentSlice,
      pinfo :PersonalInfo,
      filter : FilterSlice,


  },
})