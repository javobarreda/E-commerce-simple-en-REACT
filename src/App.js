import React, { useState, useEffect, Fragment } from 'react';
//con use effecto podemos fetchear los productos enparte
import { commerce } from './lib/commerce';
//en esta instancia haremos todo, haremos toda la parte backend aqui
import { Products, Navbar, Cart, Checkout} from './components';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//iMPORTAMOS NUESTROS browser as router, switch and route para poder cambiar de pagina dinamicamente. Todo desde react-router-dom


//HEMOS IMPORTADO cada uno de los componente sen fila// exportamos todo en los respectivos index js
const App = () => {
    const [products, setProducts] = useState([]);
//debemos fetchear los productos por eso agregamos product, y setproducts. son iguales una array vacío//
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    //nos retornara una promesa, por la cual debemos esperar. Podemos extraer la data de esa response
    //la response es la data. La data son los productos

        setProducts(data);
    }
//para saber que hay dentro del carrito, sera async. Hay un patron. Todo lo hacemos usando el API
    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }
//con esta parte de aquí agregamos la posibilidad de agregar productos al carrito. Creamos la funcion respectivamente. 
// hAY DOS PARAMETROS, product id y la cantidadItem es la response al lado de const2
    const handleAddToCart = async (productId, quantity) => {
        const { cart }  = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }
//Setcart es la card depues de que el item haya siedo agregado

    const handleUpdateCartQty = async(productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity});
//esta función sirve para hacer interactivos los botones de sumar o restar productos en cada item desde el cart
        setCart(cart)
    }
    //No hemos creado la polvora, con el commerce.cart.remove o update o add podemos hacer algo util sin bacledn.

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }
//En removefromcart eliminamos todos los elementos del CARD de producto en la zona de carrito. Siempre las llamamos como funciones
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }
// no hay productos aun y no los llamamos, para eos creamos el useEffecto HOOK
//Tiene un array vacío lo cual signfica que va a correr al incio del render
    useEffect(() => {
        fetchProducts();
        fetchCart();

    }, []);

    console.log(cart);
//en Products products={products} pasamos nuestro producto como una prop dentro de la funcion products.
//luego amos a Prodcts/product product jsx y en const products ponemos products como props
    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">  
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} 
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}  
                        />
                    </Route> 
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                </Switch>
            </div>
        </Router> 
    );
}
// aRRIBA ESTA el router para switchear ypasar de una pagina a al otra. Switch entre Products y CART. O mostramos Product o mostramos CART. Todo depende de en cual ROUTE estamos TENEMOS 2 ROUTES. un exact path por cada una, para esto creamos slashes, o especies de links. 

//importamos el link de react rout al navbar, la del carrito. COn el ICON BUTTON.
export default App
