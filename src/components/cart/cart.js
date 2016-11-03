import m from 'mithril';

const Product = {
  view(vnode) {
    return m('div', vnode.attrs.children);
  }
};

const Cart = {
  view(vnode) {
    let products = vnode.attrs.products;
    let hasProducts = products.length > 0;

    let nodes = !hasProducts
      ? m('div', 'Please add some products to cart.')
      : products.map(p => m(Product, {
          key: `${p.id}`,
          children: `${p.title} - $${p.price} x ${p.quantity}`
        }))

    return m('.cart.uk-panel.uk-panel-box.uk-panel-box-primary', [
      m('.uk-badge.uk-margin-bottom', 'Your Cart'),
      m('.uk-margin-small-bottom', nodes),
      m('.uk-margin-small-bottom', `Total: $${vnode.attrs.total}`),
      m('button.uk-button.uk-button-large.uk-button-success.uk-align-right', {
        disabled: hasProducts ? '' : 'disabled',
        onclick: e => {
          e.target.disabled = true;
          vnode.attrs.onCheckoutClicked();
        }
      }, 'Checkout')
    ]);
  }
};

export default Cart;
