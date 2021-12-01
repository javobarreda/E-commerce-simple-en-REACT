import React from 'react';
//cada una de estas representa algo , badge por ejemplo el numero de item, menu, etc//
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/store-front-icon-29.jpg';
import useStyles from './styles';

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

export default Navbar
