import React from 'react';
import { Grid } from '@material-ui/core';
//importamos nuestro layout de productos, aqui van todos//
//todo lo importamos de materialui lo cual ya tiene plantillas listas//
import Product from './Product/Product'
import useStyles from './styles';
//creamos constantes "const" las cuales son variables en JS
//luego las exportamos como siempre debe ser. el Grid sirve para poner los items dentro//
const Products = ( { products, onAddToCart }) => {
    const classes = useStyles();
//con {} ingresamos lógica JS, product.map en el habran productos, y por cada uno queremos retornar algo especifico
    //justificamos el contenido en el centro conjustify center y su espaciado//


//siempre que busquemos algo en JS debe tener una key y una id. y sus espacios respectivos
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>       
    );
}
export default Products; 