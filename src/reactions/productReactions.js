import m from 'mithril';
import State from '../state';
import Api from '../api';

State
  .on('products:fetch', () => {
    State.get().set({ status: 'loading' });

    Api.getProducts(products => {
      State.get().set({
        products: products,
        status: 'ready'
      });
    });
  })
  .on('products:checkout', () => {
    let cart = State.get().cart.set({ status: 'checkingout' });

    Api.buyProducts(cart.products, () => {
      console.log('YOU BOUGHT: ', cart.products.toJS());
      State.get().cart.set({
        status: 'ready',
        products: []
      });
    });
  })
  .on('products:add', product => {
    let state = State.get().pivot();
    let cartProduct;

    if (product.inventory > 0) {
      cartProduct = findInCart(state.cart, product.id);
      if (cartProduct) {
        state = cartProduct.set({ quantity: cartProduct.quantity + 1 });
      } else {
        state = state.cart.products.push({
          id: product.id,
          title: product.title,
          quantity: 1,
          price: product.price
        });
      }

      product.set({ inventory: product.inventory - 1 });
    }
  })
  .on('update', m.redraw);

function findInCart(cart, id) {
  let found = false, i = 0, cartProduct;

  while (!found && i < cart.products.length) {
    cartProduct = cart.products[i++];
    if (cartProduct.id === id) {
      found = cartProduct;
    }
  }

  return found;
}
