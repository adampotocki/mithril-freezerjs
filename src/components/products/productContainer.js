import m from 'mithril';
import ProductItem from './productItem';
import ProductList from './productList';
import State from '../../state';

const ProductsContainer = {
  view(vnode) {
    let nodes = vnode.attrs.products.map(product => {
      return m(ProductItem, {
        key: product.id,
        product: product,
        onAddToCartClicked: this.onAddToCartClicked(product)
      });
    });

    return m(ProductList, {
      title: 'Mithril Flux Shop Demo (Freezer)',
      children: nodes
    });
  },
  onAddToCartClicked(product) {
    return () => State.trigger('products:add', product);
  }
};

export default ProductsContainer;
