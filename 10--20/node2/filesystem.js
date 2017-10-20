


  var fs = require("fs");
  var readMe = fs.readFileSync("readMe.txt","utf8");

  //同步读取文件
  // console.log(readMe);   //显示文件里的内容

  //同步写入文件,会自动创建writeMe文件并写入内容
   fs.writeFileSync("writeMe.txt","啦啦啦啦了");


   //异步读取文件
   // fs.readFile("readMe.txt","utf8",function(err,data){
   // 	if (err) throw err; 
   // 	console.log(data); //显示文件内容
   // });

   // console.log(123);

  //异步写入文件
  // fs.writeFile("writeMe.txt","Hello everyone",function(err){
  //     if (err) throw err;
  //     console.log(data);
  // });

 //练习: 异步读取文件并将读取的文件内容写到writeMe.txt中
   // fs.readFile("readMe.txt","utf8",function(err,data){
   //  if(err) throw err;
   //  fs.writeFile("writeMe.txt",data);
   // });
 

 //删除文件
  // fs.unlink("readMe.txt",function(err,result){
  // 	if (err) throw err;//如果有错抛出
  // 	console.log(result); 
  // });
 

 //创建文件夹
 fs.mkdir("stuff",function(){

 });

//删除文件夹
fs.rmdir("stuff",function(){
    
});



















