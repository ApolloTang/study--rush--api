import React from 'react';
import ReactDom from 'react-dom';

import fonts from './common/fonts/index.js';
import './main.less';
import App from './app';

let foo:number = undefined

// xxxeslint-disable-next-line
console.log('foo')

fonts.loadFonts()
const appContainer = document.getElementById('app-container');
ReactDom.render( <App/>,  appContainer)

