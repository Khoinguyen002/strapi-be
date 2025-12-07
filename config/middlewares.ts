export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
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
