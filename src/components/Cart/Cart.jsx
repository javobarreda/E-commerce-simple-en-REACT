import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
//Importamos el link en el carrito para que cuando este vacio tambien no salga un espacio para agregar, algo clickeable para ir a comprar
import useStyles from './styles';
import CartItem from './Cartitem/CartItem';
//hay una logica simple de carrito vacío en linea 9. Todo numero distinto a cero es verdadero
//si el carro esta vacío, esa parte sera 0. Luego en la linea 46 podemos la logica funcionando

//dentro del const pasamos lo declarado en nuestra APPjs respecto a la funcionalidad de reducir, aumentar o vaciar los productos
const Cart = ( {cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const isEmpty = !cart.line_items?.length;
    const classes= useStyles();
// arriba definimos lo que pasa si nuestro carrito esta vacío
    const EmptyCart = () => (
        <Typography variant="subtitle1">No tienes productos en el carrito de compras,
            <Link to="/" className={classes.link}>añade algunos</Link>!
        </Typography>
//aqui podemos ver el Link to, el cual nos lleva nuevamente al inicio. añade algunos estara sombreado.
    );
//armamos un fragmento vacío <> luego un grid con espacio de container de 3. Usamos cart.line maps con una funcion callback
//si estamos loopeando ncesitamos una key, esa es nuestra item.id. Dentro tenemos un CartItem

// Creamos una cart de carddetails, ahi esta la tipografia, una variante h4, que hablara del subtotal// Nos dara la suma total.

//luego un div con 2 botones, uno className con empty button con un tipo large y tipo botton. Ademas  de una variante contain y color secondary. Dirá CARRITO VACÍO. Se duplica el boton pero ahora para el checkout pero color primary. Esos son los botones//
    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}> 
                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid> 
        <div className={classes.cardDetails}> 
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Vaciar carrito</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>

        </div>
        </>
    );
//en los onclick de expresamos lo que queremos que funcione.

//cONTainer nos da paddings y todo, el classes toolbar nos manda el contenido un poquito mas abajo
//agregamos mas clases y tipografia
// aqui esta la logica del carrito vacio, usamos el operador ternary
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3"  gutterBottom >Tu carrito de compras </Typography>
            { isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart
