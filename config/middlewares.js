module.exports = ({ env }) => [
  'strapi::errors',
  // for cloud bucket
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // 'connect-src': ["'self'", 'https:'],
          // 'img-src': [
          //   "'self'",
          //   'data:',
          //   'blob:',
          //   `https://${env('AWS_BUCKET')}.storage.yandexcloud.net`,
          // ],
          // 'media-src': [
          //   "'self'",
          //   'data:',
          //   'blob:',
          //   `https://${env('AWS_BUCKET')}.storage.yandexcloud.net`,
          // ],
          'script-src': ["'self'", 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '20mb',
      formLimit: '10mb',
      textLimit: '256kb',
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]
