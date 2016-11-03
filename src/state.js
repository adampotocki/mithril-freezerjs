import Freezer from 'freezer-js';

const State = new Freezer({
  status: 'loading',
  cart: {
    status: 'ready',
    products: []
  },
  products: []
});

export default State;
