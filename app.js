var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var httpMsgs = require("./httpMsgs/httpMsgs");
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
///area de gabriel

var allowCrossDomain = function (request, response, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
  // intercept OPTIONS method
  if ('OPTIONS' == request.method) {
      response.write(200,'aaaaaa');
  }
  else {
      next();
  }
};


app.get('/', function (request, response) {
    
  //response.writeHead(200, { "Content-Type": "application/json" });
  //httpMsgs.sendJson(request, response, 'SERVICIOS DE GRUPO BIZ');
  //response.end();
  response.sendFile(path.resolve('index.html'));
});

/////FACHADA DE PLAN DE CUENTAS
app.get('/getplancuentas', function (request, response) {
    
  var fachadacuentas = require("./shared/fachadacuentas");
  fachadacuentas.GetPlanCuentas(request, response);
});

/////FACHADA DE PLAN DE AUXILIARES
app.get('/getcias', function (request, response) {
    
  var fachadaauxiliares = require("./shared/fachadaauxiliares");
  fachadaauxiliares.GetCias(request, response);
});

////FACHADA VENTAS
app.get('/getgerencialventas', function (request, response) {
    
  var fachadagerencial = require("./shared/fachadagerencial");
  var macroproyecto = request.query.macroproyecto ;
  var proyecto = request.query.proyecto ;
  fachadagerencial.GetGerencialVentas(request, response, macroproyecto, proyecto);
});


////FACHADA DE BIZSECURITY
app.get('/getdsn', function (request, response) {
    
  var userlogin = request.query.userlogin ;
  var userpassword = request.query.userpassword ;
  var fachadabizsecurity = require("./shared/fachadabizsecurity");
  fachadabizsecurity.GetDSN(request, response, userlogin, userpassword);
});

app.get('/getdsnvariablecommon', function (request, response) {
    
  var userlogin = request.query.userlogin ;
  var userpassword = request.query.userpassword ;
  var fachadabizsecurity = require("./shared/fachadabizsecurity");
  fachadabizsecurity.GetDSNVariableCommon(request, response, userlogin, userpassword);
});

app.post('/getdsnbyiduser', function (request, response){

  var userlogin = request.body.userlogin ;
  var userpassword = request.body.userpassword ;
  //console.log(request.body.userlogin);
  //console.log(request.body.userpassword);
  var fachadabizsecurity = require("./shared/fachadabizsecurity");
  fachadabizsecurity.GetDSNVariableCommon(request, response, userlogin, userpassword);
  
});

app.post('/setdsnasp', function (request, response){

  //console.log(request.body.user);
  var dsnarray=[];
  dsnarray=request.body;
  //console.log(request.body);
  //console.log('user: '+dsnarray.user);
  //console.log('password: '+dsnarray.password);
  //console.log('server: '+dsnarray.server);
  //console.log('datauserbase: '+dsnarray.datauserbase);
  //console.log('port: '+dsnarray.port);
  //console.log('connectionTimeout: '+dsnarray.connectionTimeout);
  //console.log('pool.max: '+dsnarray.pool[0].max);
  var configASP={};
  configASP={
    "user": dsnarray.user,
    "password": dsnarray.password,
    "server": dsnarray.server,
    "datauserbase": dsnarray.datauserbase,
    "port": dsnarray.port,
    "connectionTimeout": dsnarray.connectionTimeout,
    "pool": {
        "max": 100,
        "min": 0,
        "idleTimeoutMillis": 3000
    }
  };
  //console.log(configASP);
  //exports.GetDSNCommon = configASP;
  
  //response.writeHead(200, { "Content-Type": "application/json" });
  //response.write(JSON.stringify(configASP));
  response.end();
});
///////////////////////////////

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
