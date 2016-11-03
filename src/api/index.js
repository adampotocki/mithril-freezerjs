/**
 * Mock API
 */
import m from 'mithril';

const Api = {
  getProducts: (cb) => {
    return m.request({
      method: 'GET',
      url: './products.json'
    }).run(cb);
  },
  buyProducts: (payload, cb, timeout=500) => {
    setTimeout(() => cb(), timeout);
  }
};

export default Api;
