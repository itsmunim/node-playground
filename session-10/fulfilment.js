const fulfilmentPayload = {
  orderId: '',
  store: {
    name: '',
    id: '',
  },
  shippingInfo: {
    providerId: '',
    providerName: '',
    fee: '', // fulfilment will under the hood disburse the fee from stores account
    // as user has already paid this to store via payments
  },
};
