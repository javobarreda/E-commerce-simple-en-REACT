import React from 'react';
import {TextField, Grid, InputLabel} from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
// en rpimer lugar, lo que retornara es un grid con diversos tamaños, xs de 12 y sm de 7
//Luego tendrmeos un controller, nos permite usar otros inputs o campos de texto como si nada


//Es un poco complejo de entender, pero es la manera de insertar el react hook form
const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
//Ahora tenemos cómo expresar el campo de texto para nuestro formulario
    return (
        <Grid item xs={12} sm={6}>
            <InputLabel>{label}</InputLabel>
            <Controller
                render={({ field }) => <TextField {...field} />}
                name={name}
                control={control}
                fullWidth
                label={label}
                required={required}
                variant="outlined"
            />          
        </Grid>
    );
}
// todas las propiedades son a full width, debemos darles un nombre
// un label, props y debemos saber si el campo es requerido, viniendo de props tambien.
export default FormInput;
//ahora importemos todo esto
