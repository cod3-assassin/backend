module.exports = [
  'strapi::errors', // Handles errors and responses
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: false, // Disables CSP (useful for development)
    },
  },
  'strapi::cors', // Enables CORS (Cross-Origin Resource Sharing)
  'strapi::poweredBy', // Adds a "X-Powered-By" header
  'strapi::logger', // Logs requests and responses
  'strapi::query', // Processes query parameters
  'strapi::body', // Parses request bodies
  'strapi::session', // Handles user sessions
  'strapi::favicon', // Serves a favicon
  'strapi::public', // Serves static files from the public directory
];
