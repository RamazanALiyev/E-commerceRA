import {createSlice} from "@reduxjs/toolkit";
// import commerce from '../lib/Ecommerce'
const initialState = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    disable: true,
    fullname: '',
    adress: '',
    country: '',
    city: '',
    cardCode:'',
    expireCard:'',
    cvvCard : '',
    Iso2 : '',
    CardID : '',
    ShippingID : '',
    CardToken : '',
};

export const PaymentSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {
        addName: (state, action) => {
            state.name = action.payload;
        },
        addSurname: (state, action) => {
            state.surname = action.payload;
        },
        addEmail: (state, action) => {
            state.email = action.payload;
        },
        addPhone: (state, action) => {
            state.phone = action.payload;
        },
        changeBtn: (state, action) => {
            state.disable = action.payload
        },
        addFullname: (state, action) => {
            state.fullname = action.payload;
        },
        addAdress: (state, action) => {
            state.adress = action.payload;
        },
        addCountry: (state, action) => {
            state.country = action.payload;
        },
        addCity: (state, action) => {
            state.city = action.payload;
        },
        addCardCode : (state,action)=>{
            state.cardCode = action.payload
        },
        addExpiredate : (state,action)=>{
            state.expireCard = action.payload
        },
        addCvvCard : (state,action)=>{
            state.cvvCard = action.payload
        },
        addIso2 : (state,action)=>{
            state.Iso2 = action.payload
        },
        addCardID : (state,action)=>{
            state.CardID = action.payload
        },
        addShippingID : (state,action)=>{
            state.ShippingID = action.payload
        },
        addCartoken : (state,action)=>{
            state.CardToken = action.payload
        },

    },

});
export const {
    addName,
    addSurname,
    addEmail,
    addPhone,
    changeBtn,
    addFullname,
    addAdress,
    addCountry,
    addCity,
    addCardCode,
    addExpiredate,
    addCvvCard,
    addIso2,
    addCardID,
    addShippingID,
    addCartoken
} = PaymentSlice.actions;

export default PaymentSlice.reducer;



