



// 限时代码
//先在终端引入  node server.js ,然后在浏览器127.0.0.1:8080回车

 var http = require("http");  //引入一个模块

 var server = http.createServer(function(req,res){

  console.log("客户端向服务器已经建立通信" + req.url);

  //响应头,html或者json时需要,字符串不需要
  res.writeHead(200,{"Content-type":"text/plain"});
  res.end("哈喽");

 });
 //第一个参数3000以上 监听本机服务器及其端口号
 server.listen(8080,"127.0.0.1"); //换成localhost也可以
 console.log("server is running...");



 var http = require("http");
 var server = http.createServer(function(req.res){
 	console.log("客户端向服务器已经建立通信"+req.url);
 	res.writeHead(200,{"Content-type":"text/type"});
 	res.end("llss");
 });
 server.listen(8080,"127.0.0.1");
 console.log("serve is running");





















