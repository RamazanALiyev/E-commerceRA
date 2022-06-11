import {Formik, Field} from 'formik';
import {PaymentInputsWrapper, usePaymentInputs} from 'react-payment-inputs';
import images from "react-payment-inputs/images";
import Button from "@mui/material/Button";
import './paymethod.scss'
import {useDispatch, useSelector} from "react-redux";
import {addCardCode, addCvvCard, addExpiredate, addCardID, addShippingID} from "../../../Features/PaymentInfo";
import {useEffect} from "react";
import commerce from "../../../lib/Ecommerce";

function PaymentForm(props) {


    const dispatch = useDispatch()

    const ISO2 = useSelector((state) => state.payment.Iso2)
    const Cardtoken = useSelector((state) => state.payment.CardToken)
    const fullname1 = useSelector((state) => state.payment.fullname)
    const adress1 = useSelector((state) => state.payment.adress)
    const country1 = useSelector((state) => state.payment.country)
    const city1 = useSelector((state) => state.payment.city)
    const name1 = useSelector((state) => state.payment.name)
    const surname1 = useSelector((state) => state.payment.surname)
    const email1 = useSelector((state) => state.payment.email)
    const phone1 = useSelector((state) => state.payment.phone)
    const ShippingId = useSelector((state) => state.payment.ShippingID)



    const handlerNumber = (e) => {
        dispatch(addCardCode(e.target.value))
    }
    const handlerdate = (e) => {
        dispatch(addExpiredate(e.target.value))
    }
    const handlercvv = (e) => {
        dispatch(addCvvCard(e.target.value))
    }


    const {
        meta,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        wrapperProps
    } = usePaymentInputs();

    return (
        <Formik
            initialValues={{
                cardNumber: '',
                expiryDate: '',
                cvc: ''
            }}
            onSubmit={(data) => {
                if (data) {

                    let number = data.cardNumber
                    let date = data.expiryDate
                    let cvc = data.cvc
                    commerce.checkout
                        .capture(`${Cardtoken}`, {
                            customer: {
                                firstname: `${name1}`,
                                lastname: `${surname1}`,
                                email: `${email1}`,
                                phone: `${phone1}`,
                            },
                            shipping: {
                                name: `${fullname1}`,
                                street: `${adress1}`,
                                town_city: `${city1}`,
                                country: `${ISO2}`,
                            },
                            fulfillment: {
                                shipping_method: `${ShippingId}`,
                            },
                            payment: {
                                gateway: "test_gateway",
                                card: {
                                    number: `${number}`,
                                    expiry_month: `${date.slice(0, 2)}`,
                                    expiry_year: `${date.slice(5, 7)}`,
                                    cvc: `${cvc}`,
                                    postal_zip_code: "94107",
                                },
                            },
                        })
                        .then((response) => {
                            props.activestep((prevActiveStep) => prevActiveStep + 1);
                            // commerce.cart.refresh().then((cart) => dispatch(setSimpleList(cart)));
                            // dispatch(setReset())
                        });
                }
            }}
            validate={() => {
                let errors = {};
                if (meta.erroredInputs.cardNumber) {
                    errors.cardNumber = meta.erroredInputs.cardNumber;
                }
                if (meta.erroredInputs.expiryDate) {
                    errors.expiryDate = meta.erroredInputs.expiryDate;
                }
                if (meta.erroredInputs.cvc) {
                    errors.cvc = meta.erroredInputs.cvc;
                }
                return errors;
            }}
        >
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <PaymentInputsWrapper {...wrapperProps}>
                            <svg {...getCardImageProps({images})} />
                            <Field name="cardNumber">
                                {({field}) => (
                                    <input  {...getCardNumberProps({
                                        onBlur: field.onBlur,
                                        onChange:field.onChange,
                                    })} />
                                )}
                            </Field>
                            <Field name="expiryDate">
                                {({field}) => (
                                    <input {...getExpiryDateProps({onBlur: field.onBlur, onChange:field.onChange})} />
                                )}
                            </Field>
                            <Field name="cvc">
                                {({field}) => <input {...getCVCProps({
                                    onBlur: field.onBlur,
                                    onChange:field.onChange,
                                })} />}
                            </Field>
                        </PaymentInputsWrapper>
                    </div>
                    <Button  className='pay-btn border border-primary mt-2' type="submit">
                        Ödəniş et
                    </Button>
                </form>
            )}
        </Formik>
    );
}

export default PaymentForm