//自调用函数----小蛇
(function(){
    var elements=[];//存放小蛇的每个身体部分
    //小蛇的每个部分构造函数
    function Snake(width,height,direction){
        this.width=width||20;
        this.height=height||20;
        //小蛇的身体
        this.body=[
            {x:3,y:2,color:"red"},//头
            {x:2,y:2,color:"orange"},//身体
            {x:1,y:2,color:"orange"}//身体
        ];
        this.direction = direction || "right";
    }
    //为原型添加方法---小蛇的初始化方法
    Snake.prototype.init=function (map) {
        remove();
        //循环遍历创建div
        for(var i=0;i<this.body.length;i++){
            //数组中的每个数组元素都是一个对象
            var obj=this.body[i];
            var div=document.createElement("div");//创建div
            map.appendChild(div);//把div加入到map中
            //设置div的样式
            div.style.position="absolute";
            div.style.width=this.width+"px";
            div.style.height=this.height+"px";
            div.style.left=obj.x*this.width+"px";
            div.style.top=obj.y*this.height+"px";
            div.style.backgroundColor=obj.color;
            //方向

            //把div加入到elements数组中---目的是为了删除
            elements.push(div);
        }
    };

    //为原型添加方法---小蛇移动
    Snake.prototype.move=function(food,map){
        var i=this.body.length-1;
        for(;i>0;i--){
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }
        //判断方向---改变小蛇的头的坐标位置
        switch (this.direction) {
            case "top":
                this.body[0].y-=1;
                break;
            case "bottom":
                this.body[0].y+=1;
                break;
            case "left":
                this.body[0].x-=1;
                break;
            case "right":
                this.body[0].x+=1;
                break;
        }

        //判断小蛇有没有吃到食物---食物和小蛇头部的横纵坐标一致
        var headX=this.body[0].x*this.width;
        var headY=this.body[0].y*this.height;
        //食物的横纵坐标
        //判断是否一致，是则删除食物---调用init函数
        if(headX==food.x&&headY==food.y){
            var last=this.body[this.body.length-1];
            //把锁喉的蛇尾复制一个，重新加入到小蛇的body中
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            });
            //把食物删除掉，初始化----调用init函数
            food.init(map);
        }
    };

    //删除小蛇的私有方法
    function remove(){
        //获取数组
        var i=elements.length-1;
        for(;i>=0;i--){
            //先从尾删除
            var ele=elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i,1);
        }
    }

    //将局部变成全局
    window.Snake=Snake;

}());