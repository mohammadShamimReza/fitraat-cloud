import SSLCommerzPayment from "sslcommerz-lts";

const store_id = "detox66a61e060bcb8";
const store_passwd = "detox66a61e060bcb8@ssl";
const is_live = false;

export const paymentService = {
  async initTransaction(data) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    return sslcz.init(data);
  },

  async validateTransaction(val_id) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    return sslcz.validate({ val_id });
  },

  async initiateRefund(data) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    return sslcz.initiateRefund(data);
  },

  async refundQuery(refund_ref_id) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    return sslcz.refundQuery({ refund_ref_id });
  },

  async transactionQueryByTransactionId(tran_id) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    return sslcz.transactionQueryByTransactionId({ tran_id });
  },

  async transactionQueryBySessionId(sessionkey) {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    return sslcz.transactionQueryBySessionId({ sessionkey });
  },
};
