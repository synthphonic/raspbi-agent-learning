
const mongoose = require('mongoose');
const config = require("../node-api/configuration/config.json");

var express = require('express'),
  app = express(),
  port = config.port

var swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('../node-api/swagger.json');


Task = require('./api/models/dataModel'),

bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser({limit: '10mb'}))
 app.use(bodyParser.json());

 var mongodbOptions = {
  server: {
     socketOptions: {
        socketTimeoutMS: 10000,
        connectionTimeout: 10000
     },
     auto_reconnect: true,
     reconnectTries: 60,
     reconnectInterval: 3000,
  },   
};

async function run() {
  try {
       await mongoose.connect(config.db_uri , mongodbOptions);
       console.log("Connected correctly to Db : " + config.db_name);
       var routes = require('./api/routes/apiRoutes'); //importing route
       app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
       app.use('/api/v1', routes);
       routes(app); //register the route
       app.listen(port);

console.log('FastCut RESTful API server started on: ' + port);
      } catch (err) {
       console.log(err.stack);
   }
}

run().catch(console.dir);

