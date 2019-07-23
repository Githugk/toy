//自调用函数----食物的
(function () {
    var elements=[];//用来存放每个小方块食物
    //食物是一个对象，有宽高颜色横纵坐标，先定义构造函数，再实例化
    function Food(x,y,width,height,color) {
        this.x=x;
        this.y=y;
        this.height=height||20;
        this.width=width||20;
        this.color=color||"green";
    }

    //为原型添加初始化方法，目的是为了将食物初始化在地图上显示
    Food.prototype.init=function(map){
        remove();
        var div=document.createElement("div");//创建div
        map.appendChild(div);//把div加入到map中
        //设置div样式
        div.style.width=this.width+"px";
        div.style.height=this.height+"px";
        div.style.backgroundColor=this.color;
        //脱离文档流
        div.style.position="absolute";
        //随机横纵坐标
        this.x=parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
        this.y=parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
        div.style.left=this.x+"px";
        div.style.top=this.y+"px";
        //把div加入到数组elements中
        elements.push(div);
    };


    //私有函数，删除食物
    function remove(){
        for(var i=0;i<elements.length;i++){
            var ele=elements[i];
            //找到这个子元素的父级元素，然后删除这个子元素
            ele.parentNode.removeChild(ele);
            //再次把elements中的这个子元素也要删除
            elements.splice(i,1);
        }
    }

    //把局部变成全局
    window.Food=Food;
}());