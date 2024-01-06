import http from 'src/utils/http';

const URL = 'products';

export const productsApi = {
  getProducts(config) {
    return http.get(URL, config);
  },

  getProductDetail(productId) {
    return http.get(`${URL}/${productId}`);
  }
};
