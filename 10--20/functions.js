


//在nodejs中经常使用函数表达式

//正常
 function sayHi(){
 	console.log("hi cat");
 }

//函数表达式  右左法则
 var sayHi = function(){
 	console.log("hello miaomiao");
 }

 sayHi();  //hello miaomiao
//函数表达式比正常函数执行快,函数表达式已经将内容存在内存中,
//正常函数调用时发现内存中已经存在则直接调用



//回调函数
 function sayHi1(){
 	console.log("hi Apple");
 }

var sayHi2 = function(){
 	console.log("hello Orange");
 }

function callFunction(foo){
	foo();
}
  callFunction(sayHi1);
























