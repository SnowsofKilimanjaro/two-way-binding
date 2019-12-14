//三个订阅者 subscribers
var sub1 = {
  update: function() {
    console.log(1);
  }
};
var sub2 = {
  update: function() {
    console.log(2);
  }
};
var sub3 = {
  update: function() {
    console.log(3);
  }
};

//一个主题对象
function Dep() {
  this.subs = [sub1, sub2, sub3];
}
Dep.prototype.notify = function() {
  this.subs.forEach(function(sub) {
    sub.update();
  });
};

var dep = new Dep();
//一个发布者
var pub = {
  publish: function() {
    dept.notify();
  }
};
//发布者发布消息， 主题对象执行notify，进而触发订阅者执行update方法
pub.publish();
