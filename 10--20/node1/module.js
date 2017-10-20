

var count = function(arr){
	return `数组中拥有${arr.length}个元素`;
}

// console.log(count(["hengm","2","dj"]));

  //只有使用module.exports后,其他文件才可以引用,(对外公开)
   // module.exports.c = count; //export后面的.c 随便起



  var adder = function(a,b){
  	return `两个数的和为${a+b}`;
  }
  // module.exports.a = adder;


   var pi = 3.141;
  // module.exports.pi = pi;
   


   //最终版优化 (模块模式 高内聚低耦合 代码模块化)
   module.exports = {
	   	c:count,
	   	a:adder,
	   	pi:pi
   }


















   