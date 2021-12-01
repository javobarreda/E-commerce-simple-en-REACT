import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
// importamos tipografia, iconos de boton, etc//
import { AddShoppingCart } from '@material-ui/icons';
//aqui tenemos el layout para todos los productos especificamente imagenes descripciones, titulos//
import useStyles from './styles';
//el onaddtocart está en nuestro app, ya lo declaramos. Ahora debemos llamarlo con clicks con Card Actions
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
//vamos a crear algunas clases. de donde sale el producto? product es un componente hijo de produc jsx lo llamamos en la linea 17
//typography es para cualquier texto en materialui

//ahora SI mapeamos a nuestros productos reales. Para cada producto mandamos un objeto del producto
//Dangeraouslysetinnerhtml sirve para leer la descripción, renderizar el html
    return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image.url} tittle={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{__html:product.description }} variant="body2" color="textSecondary" />
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Añadir a carrito" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
    );
}
//el onClick de IconButton es una funcion callback. que sirve para que dependa de dos parametros, el product id, y la cantidad va de 1 a 1
export default Product
