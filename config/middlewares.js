module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "frame-src": [
            "'self'",
            "http://localhost:3000",
            "youtube.com",
            "www.youtube.com",
            "vimeo.com",
            "*.vimeo.com",
            "facebook.com",
            "www.facebook.com",
          ],
          "frame-ancestors": ["'self'", "http://localhost:3000"],
        },
      },
    },
  },
  // "strapi::security",
 {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://localhost:3000"], // 👈 your frontend origin
      headers: ["*"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
