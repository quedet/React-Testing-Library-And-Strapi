module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eaa156e37cf1e8d39af4d4cfd322c86a'),
  },
});
