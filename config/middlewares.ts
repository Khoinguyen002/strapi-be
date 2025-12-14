module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL")
              ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "")
              : "",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL")
              ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "")
              : "",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // Giới hạn cho multipart/form-data (upload file)
      jsonLimit: "256mb", // Giới hạn cho JSON body
      textLimit: "256mb", // Giới hạn cho text body
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // Đơn vị là Bytes (Ví dụ: 200MB)
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
