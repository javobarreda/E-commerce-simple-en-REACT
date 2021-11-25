import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import CartItem from './Cartitem/CartItem';

const Cart = ( {cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const isEmpty = !cart.line_items?.length;
    const classes= useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">No tienes productos en el carrito de compras,
            <Link to="/" className={classes.link}>añade algunos!</Link>!
        </Typography>

    );

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
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Carro vacío</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>

        </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3"  gutterBottom >Tu carrito de compras </Typography>
            { isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart
