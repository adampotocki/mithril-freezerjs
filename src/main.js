import m from 'mithril';

import App from './components/app';
import State from './state';

import './reactions/productReactions';

State.trigger('products:fetch');

m.mount(document.getElementById('appRoot'), App);
