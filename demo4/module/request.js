var obj={
    get:function(){
        console.log('从 服务器获取数据');
    },
    post:function(){
        console.log('提交数据');
    }
}

//exports.xxxx = obj;
module.exports=obj;