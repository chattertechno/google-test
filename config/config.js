module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('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'),
      },
      settings: {
        defaultFrom: 'tradermaster11@gmail.com',
        defaultReplyTo: 'tradermaster11@gmail.com',
      },
    },
    // ...
  });