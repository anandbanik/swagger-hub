
const swaggerCombine = require('swagger-combine');
const config = (module.exports = {
  swagger: '2.0',
  info: {
    title: 'Basic Swagger Combine Example',
    version: {
      $ref: './package.json#/version',
    },
  },
  apis: [
  
    {
      url: 'https://api.apis.guru/v2/specs/medium.com/1.0.0/swagger.yaml',
      paths: {
        base: '/users',
      },
    },
    {
      url: 'https://api.apis.guru/v2/specs/deutschebahn.com/betriebsstellen/v1/swagger.json',
      paths: {
        base: '/bahn',
      },
    },
  ],
  other: {},
});

if (!module.parent) {
  swaggerCombine(config).then(res => console.log(JSON.stringify(res, false, 2))).catch(err => console.error(err));

  /* Using a callback */
  swaggerCombine(config, (err, res) => {
    if (err) console.error(err);
    else console.log(JSON.stringify(res, false, 2));
  });
}