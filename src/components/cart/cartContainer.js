import m from 'mithril';
import Cart from './cart';
import State from '../../state';

const CartContainer = {
  view(vnode) {
    let cart = vnode.attrs.cart;
    let total = 0;

    cart.products.map(prod => total += prod.price * prod.quantity)

    return m(Cart, {
      products: cart.products,
      total: total.toFixed(2),
      onCheckoutClicked: this.onCheckoutClicked(cart.products)
    });
  },
  onCheckoutClicked: (products) => {
    if (products.length) {
      return () => State.trigger('products:checkout');
    }
  }
};

export default CartContainer;
