import m from 'mithril';

const ProductList = {
  view(vnode) {
    return m('.shop-wrap', [
      m('h2', vnode.attrs.title),
      m('div', vnode.attrs.children)
    ]);
  }
};

export default ProductList;
