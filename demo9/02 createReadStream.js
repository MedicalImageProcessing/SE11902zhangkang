const fs=require('fs');
var str='';
for(var i=0;i<500;i++){
    str+='我是从数据库获取的数据，我要保存起来111\n';
}

var writeStream=fs.createWriteStream('./data/output.txt');
writeStream.write(str);

writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
})