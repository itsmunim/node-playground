const oderPayload = {
  customer: {
    id: '', // the id from identity/user service
    firstName: '',
    lastName: '',
    address: {
      address: '',
      country: '',
      state: '',
      postCode: '',
      phoneNumber: '',
    },
    shippingAddress: {
      address: '',
      country: '',
      state: '',
      postCode: '',
      phoneNumber: '',
      name: '',
    },
  },
  items: [
    {
      id: '', // the id from inventory service
      name: '',
      quantity: '',
      store: {
        name: '',
        id: '',
      },
      unitPrice: '',
      details: {},
    },
  ],
  extra: {
    discount: '',
    vat: '', // in percentage
    shippingInfo: {
      providerId: '',
      providerName: '',
      fee: '',
    },
  },
};

/**
 * Assuming the database is nosql;
 * mongodb has single doc ACID by default.
 */
const orderDbSchema = {
  orderId: '',
  customer: {
    // the whole customer object
  },
  items: [
    // the whole items array
  ],
  total: '', // calculated total from item unit price and quantity
  vat: '',
  discount: '',
  shippingInfo: {},
  status: 'in-progress|payment-pending|shipment-pending|completed|cancelled',
  paymentStatus: 'pending|success|failure|refunded',
  shipmentStatus: 'in-warehouse|on-the-way|shipped|cancelled|failed',
  errors: {
    // respective error messages or details are added here
    payment: '',
    shipment: '',
  },
};
