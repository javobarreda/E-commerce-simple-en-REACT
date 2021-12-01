import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
// importamos también todo de material ui//
//importamos clases y usestyles, posteriorment creamos u styles js
import useStyles from './styles';
// ahora si podemos crear el layout y clases. Abajo tenemos agregado el onUpdate y Onremove
const CartItem = ({ item , onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();
//Tendremos dentro de cada cart una imagen con el card media, y el item lo traemos del card. El cual es Cart Item desde Cartjsx
//cardcontent tiene el cardcontent, dentro del card content hay 2 tpografias , una variant h4 que es el nombre del producto, y el otro es el precio. Un h5 de item.line.total.formatted-with-symbol el cual suma a los elementos de cada producto
//Luego un div con class.buttons y UNbutton el cual es pequeño y puede decrementar o disminuir el numero de ITEMS. + AND - 
//Una tipografia en el medio con la cantidad de cada item.
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media}/> 
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity -1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Eliminar</Button>
            </CardActions>      
        </Card>
    )
}
//Hay tambien un boton que sacará cada uno de los items respectivamente
export default CartItem
