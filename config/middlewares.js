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
            "https://www.fitraat.com",
            "http://localhost:3000",
            "youtube.com",
            "www.youtube.com",
            "vimeo.com",
            "*.vimeo.com",
            "facebook.com",
            "www.facebook.com",
          ],
          "frame-ancestors": [
            "'self'",
            "https://www.fitraat.com",
            "http://localhost:3000",
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://www.fitraat.com", // ✅ production frontend
        "http://localhost:3000", // ✅ local dev
      ],
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
