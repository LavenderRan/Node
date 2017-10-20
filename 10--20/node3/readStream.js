

// buffer 类似的东西装到一个盒子里
//stream  流
 
 
  var fs = require("fs");
  var myReadStream = fs.createReadStream(__dirname+"/readme.txt","utf8");
  // console.log(myReadStream);

  //data 名字固定,不能随便起;  chunk随便起
  myReadStream.on("data",function(chunk){
  	   // 分段传送  有六个分割线,相当于装东西的盒子
  	   console.log("====================接收chunk=================");
       console.log(chunk);

  });