Page({
  data:{
    text:"Page listDetail",
    isHidden:"false"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    this.getDetail(options.myId);//myId是前面?后面自定义的变量
  },
  getDetail:function(id){
    var _this=this;
    wx.request({
      url:"http://datainfo.duapp.com/shopdata/getGoods.php",
      data:{classID:id},  //这个id是上个页面传递过来的id  myId->id
      success:function(result){
        // console.log(result.data);
        // 接口是jsonp接口，要截取字符串 
        var str = result.data.split("callback(");
        var jsondata ="";
        if(str.length>1){
            jsondata=str[1].substring(0,str[1].length-1)
            console.log(JSON.parse(jsondata));
            // 请求数据，改变setData视图层的数据
            _this.setData({
              items:JSON.parse(jsondata),
              isHidden:true
            })
         }
        
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    //存储数据方法， wx.getStorageSync
    var value= wx.getStorageSync("name");
    console.log(value);
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})

