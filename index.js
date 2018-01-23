
const express = require('express');

const app = (exports.app = express());
const app2 = (exports.app2 = express());

const swaggerCombine = require('swagger-combine');
const basicConfig = require('./basic');
// cross origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/swagger.json', swaggerCombine.middleware(basicConfig));
app.get('/swagger.(yaml|yml)', swaggerCombine.middleware(basicConfig, { format: 'yaml' }));
app.use((err, req, res, next) => console.error(err));

if (!module.parent) {
  app.listen(3333);
}
