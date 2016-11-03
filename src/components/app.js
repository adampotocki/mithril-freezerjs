import m from 'mithril';

import State from '../state';
import ProductContainer from './products/productContainer';
import CartContainer from './cart/cartContainer';

const App = {
  view(vnode) {
    let state = State.get();
    if (state.status === 'loading') {
      return m('div', 'Loading...');
    }
    return m('div', [
      m(ProductContainer, { products: state.products }),
      m(CartContainer, { cart: state.cart })
    ]);
  }
};

export default App;
