module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://592e668c8080.ngrok.io',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '673fefbb7dbda59f66b80baf46110a4d'),
    },
  },
});
