import React, {useState} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

//El stepper se mueve mientras nosotros avanzamos, es como el seguidos de cada paso.
const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    const Confirmation = () => (
        <div>
            Confirmación
        </div>

    )

    const Form = () => activeStep === 0
        ? <AddressForm />
        : <PaymentForm />
    //el addres from y el payment estan listos para el primer paso, ellos estan cambiando. Luego el confirmation viene cuando pasemos estos pasos
    return (
        <>
           <div className={classes.toolbar} /> 
           <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={0} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
