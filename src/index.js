//importamos lo de siempre, nuestro reac, reactdom, app//
//finalmente reacdom con el render, nuestro primer parametro es nuestra app y el segundo arguemtno nos punteara a la root//
//la root esta en nuestro index.html

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));