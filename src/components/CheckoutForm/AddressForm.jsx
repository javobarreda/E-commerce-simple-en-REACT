import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
//importamos inputlabel, select,menuitem y otros elementos que nos serviran para el form de dirección
import  FormInput from './CustomTextField';
//const methods es para usar form, nos dara todos lso metodos para correr el form
const AddressForm = () => {
    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Dirección de envío</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='Nombres'/>
                        <FormInput required name='lastName' label='Apellidos'/>
                        <FormInput required name='email' label='email'/>
                        <FormInput required name='phoneNumber' label='Número (incluir +#)'/>
                        <FormInput required name='homeAddress' label='Dirección de envío'/>
                        <FormInput required name='city' label='Ciudad'/>
                        <FormInput required name='country' label='País'/>
                        <FormInput required name='ZIP' label='ZIP /Código postal'/>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );
}

export default AddressForm
