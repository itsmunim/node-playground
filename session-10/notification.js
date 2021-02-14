const notificationPayload = {
  serviceRef: 'fulfilment-service',
  templateName: 'invoice',
  senderEmail: '', // optional, default: no-reply@notifications.google.com
  recipient: {
    name: '',
    email: '',
  },
  data: {},
};

const notificationDbSchema = {
  notificationId: '',
  status: 'fail|success',
  gatewayError:
    null ||
    {
      // error from the gateway
    },
  payload: {
    serviceRef: 'fulfilment-service',
    templateName: 'invoice',
    senderEmail: '', // optional, default: no-reply@notifications.google.com
    recipient: {
      name: '',
      email: '',
    },
    data: {},
  },
};

// db schema for templates
const templateDbSchema = {
  serviceRef: '', // fulfilment-service
  templateName: '', // order-confirmation
  content: '<h1>hello {{person.name}}</h1>',
};
