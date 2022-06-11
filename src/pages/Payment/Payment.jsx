import React, {useState} from 'react';
import './payment.scss'
import Pricetotal from "../../components/Pricetotal/Pricetotal";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Personalnformation from "../../components/Payment-Components/Personal-info/Personalnformation";
import Delivery from "../../components/Payment-Components/Delivery/Delivery";
import PaymentForm from "../../components/Payment-Components/Payment-method/PayMethod";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import commerce from "../../lib/Ecommerce";
import {addCardID, addShippingID,addCartoken} from "../../Features/PaymentInfo";


const Payment = () => {
    const ISO2 = useSelector((state) => state.payment.Iso2)
    const CardID = useSelector((state) => state.payment.CardID)
    const CardToken = useSelector((state) => state.payment.CardToken)
    const dispatch = useDispatch()
    useEffect(() => {

        commerce.cart.retrieve().then((cart) => {
            console.log('cardit',cart.id)
            dispatch(addCardID(cart.id))
            if(cart.line_items.length>0){
                commerce.checkout
                    .generateToken( cart.id, { type: "cart" })
                    .then((checkout) => {dispatch(addCartoken(checkout.id))});
            }
        })



    }, [])


    useEffect(() => {
        if (ISO2 !== "") {
            commerce.checkout.getShippingOptions(CardToken, {
                country: `${ISO2}`,
            }).then((response) => {
                dispatch(addShippingID(response[0].id))
            });
        }
    }, [ISO2, CardToken, dispatch])

    const disabled = useSelector((state)=>state.payment.disable)


    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const steps = [
        {
            label: 'Şəxsi məlumatlar',
            description:
                <Personalnformation/>,

        },
        {
            label: 'Çatdırılma',
            description:
                <Delivery/>,

        },
        {
            label: 'Ödəniş',
            description: <PaymentForm activestep={setActiveStep}/>,
        },
    ];

    return (
        <div className='Payment'>
            <div className="center">
                <div className='left-side d-flex flex-column'>
                    <Box sx={{maxWidth: 400}}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={step.label}>
                                    <StepLabel
                                        optional={
                                            index === 2 ? (
                                                <Typography variant="caption">Son Addım</Typography>
                                            ) : null
                                        }
                                    >
                                        {step.label}
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                        <Box sx={{mb: 2}}>
                                            <div>
                                                <Button

                                                    variant="contained"
                                                    onClick={handleNext}


                                                    sx={{mt: 1, mr: 1,display: index===2?"none":"inline-flex"}}
                                                    disabled={disabled}

                                                >
                                                    {index === steps.length - 1 ? 'Finish' : 'Yadda Saxla'}
                                                </Button>
                                                <Button
                                                    disabled={index === 0}
                                                    onClick={handleBack}
                                                    sx={{mt: 1, mr: 1}}
                                                >
                                                    Geri
                                                </Button>
                                            </div>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{p: 3}}>
                                <Typography>Sifaris ugurla tamamlandi</Typography>

                            </Paper>
                        )}
                    </Box>
                </div>
                <Pricetotal/>
            </div>

        </div>
    );
};

export default Payment;