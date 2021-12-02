import React, {useState} from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import useStyles from './styles';

//improtamos ambos js docs donde tengo el address y payment://
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
// importamos muchas funciones de materialui. 
//El stepper se mueve mientras nosotros avanzamos, es como el seguidos de cada paso.
const steps = ['Dirección de envío', 'Detalles de pago'];
//el useState nos ayuda para ir cambiando los estados de cada una de las partes. Si ponemos 1, o 2 o 0, lo estariamos haciendo de manera manual. Dado que son 3 pasos
const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    const Confirmation = () => (
        <div>
            Confirmación
        </div>

    );
//el const form sirve para retornar informacion dependiendo del paso donde estamos. Si el activeStep es 0 mostraremos el addresform, la direccion,

//pero si no estamos en el primero, etarmeos en el payment form.//
    const Form = () => activeStep === 0
            ? <AddressForm />
            : <PaymentForm />
    
    //el addres from y el payment estan listos para el primer paso, ellos estan cambiando. Luego el confirmation viene cuando pasemos estos pasos
    //el espaciado se encuentra en el toolbar. El main tiene un classname, dentro un componente paper. Luego un tipography, donde hay una variante h4, que se alinea al centro el cual dice checkout

    //El stepper es lo que se mueve mientras mas avanzando en pasos. En pirimer lugar hay un activeSTEP el cual lo actualizamos con un state, un estado.

    //Dentro del Stepper debemos matchear los pasos. Para eso declaramos const steps, los cuales son shipping addres y payment details. SON 2.
    

    //TENEMOS 3 COMPONENTES, EL ADDRESS Y EL PAYMENT FORM. PARA LA PRIMERA PARTE, DESPUES LA CONFIRMACIÓN. Si se confirman ambos seguimos, sino  se retorna al form
    return (
        <>
           <div className={classes.toolbar} /> 
           <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
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
//La función map() Map es una función que te permite transformar los elementos de una lista y que devuelve una nueva lista con los elementos transformados
export default Checkout
