import http from 'src/utils/http';

const URL = 'purchases/add-to-cart';

const purchaseApi = {
  addToCart(data) {
    return http.post(URL, data);
  }
};

export default purchaseApi;
