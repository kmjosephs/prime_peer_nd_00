var http = require ('http');
var account = require('./accountbalance.js');

var server = http.createServer(function(request, response){
  response.writeHead(200);
  response.write(account.balance());
  response.write('$' + account.money(100, 1000000));
  response.end();

}).listen(3000)
