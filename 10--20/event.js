
 

 //js事件时
 // element.on("click",function(){
 // 	//需要执行的代码
 // })
 


  var event = require("events");
             //系统定义好的events,不是自定义,可以直接获取

 //1.实例化事件对象
 var myEmitter = new event.EventEmitter();

//2.注册事件 随便起name function里面可以加参数
 myEmitter.on("sbq",function(){

 	console.log("sbq事件被触发");
 });
 //3.激活事件
 myEmitter.emit("sbq");