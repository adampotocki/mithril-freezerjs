import m from 'mithril';

const ProductItem = {
  view(vnode) {
    let product = vnode.attrs.product,
        isAvailable = product.inventory > 0 ? true : false;

    return m('.uk-panel.uk-panel-box.uk-margin-bottom', [
      m(`img[src=${product.image}]`),
      m('h4.uk-h4', `${product.title} - $${product.price}`),
      m('button.uk-button.uk-button-small.uk-button-primary', {
        disabled: isAvailable ? '' : 'disabled',
        onclick: (e) => vnode.attrs.onAddToCartClicked(product)
      }, isAvailable ? 'Add to Cart' : 'Sold Out')
    ]);
  }
};

export default ProductItem;
