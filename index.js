const express = require('express');
const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();
const app = express();

app.use('/', health.HealthEndpoint(healthcheck));
app.get('/hello', (req, res) => {
  res.status(200).send('<h1>World</h1>');
});

app.listen(3000, () => console.log('App listening on port 3000'));
