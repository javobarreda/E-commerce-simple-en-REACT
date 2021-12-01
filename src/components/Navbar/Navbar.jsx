import React from 'react';
//cada una de estas representa algo , badge por ejemplo el numero de item, menu, etc//
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
//Improtamos el link para switchear dinamicamente y el use Location para mostrar propiedades en uno y en el otro no.
import logo from '../../assets/store-front-icon-29.jpg';
import useStyles from './styles';
// AQUI INCluimos el totalItems que hemos puesto ya en el App. cAMBIAMOS en nuestro
//badge de abajo el badgecontent en lguar de un numero cualquier le ponemos totalItems, asi se ahce dinamico
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    // si es distinto a la root route no mostramos nada
    return (
        <>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="LIFT.js" height="25px" className={classes.image} />
                        LIFT Shop
                    </Typography>
                    <div className={classes.grow} /> 
                    {location.pathname == '/' && (
                    <div className={classes.button}>
                        <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent ={totalItems} color="secondary"> 
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>  )}
                </Toolbar>
            </AppBar>
        </>
    )
}
// EN el iconbutton importmaos el componente link, el cual es to cart. Ir al carrito. El component es igual al link. Propiedades que material ui nos da. Luego tenemos que mandar un link al logo. Copiamos nuestro component al otro lado, en este caso nuestra cartografia, pero en este caso vamos a "/"

//Por ultimo queremos remover el icono CART una vez estamos ahi. dEBEMOS IMPORTAR ADEMAS DEL LINK, un USE LOCATION.

//El location.pathname es la logica para mostrar ono el carrito

//y que hay si no hya items en elc arrito? que hacemos para llenarlo?
export default Navbar
