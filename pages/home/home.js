Page({
  data:{
    text:"Page home",
    currentIndex:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  handleTapEvent:function(ev){
     //console.log(ev.target.dataset.index);//打印一下就知道具体是哪个属性
     this.setData({
       currentIndex:ev.target.dataset.index
     })
  },
  handleChangeEvent:function(ev){
    // console.log(ev);
    //找到事件，知道current在对象里//event.detail = {current: current}
    this.setData({
        currentIndex:ev.detail.current
    })
  }
})