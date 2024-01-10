import { purchaseStatus } from 'src/constants/purchaseStatus';
import http from 'src/utils/http';

const URL = 'purchases';

const purchaseApi = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data);
  },

  getPurchases() {
    return http.get(URL, {
      params: {
        status: purchaseStatus.inCart
      }
    });
  }
};

export default purchaseApi;
