//自调用函数----游戏对象
(function () {
    var that=null;
    function Game(map) {
        this.food=new Food();//实例食物对象
        this.snake=new Snake();//实例小蛇对象
        this.map=map;//地图
        that=this;//保存当前实例对象到that变量中
    }

    //为游戏原型添加初始化方法
    Game.prototype.init=function () {
        //初始化游戏
        //初始化食物
        this.food.init(this.map);
        //  初始化小蛇
        this.snake.init(this.map);
        //调用自动移动小蛇的方法
        this.runSnake(this.food,this.map);
        //调用获取按键的方法
        this.bindkey();
    };

    //为游戏原型添加方法---小蛇可以自动跑起来
    Game.prototype.runSnake=function (food,map) {

        var timeId = setInterval(function () {
            //此时的this是window

            //移动小蛇
            this.snake.move(food,map);
            //判断小蛇有无撞墙
            var maxX=map.offsetWidth/this.snake.width;//横向最大值
            var maxY=map.offsetHeight/this.snake.height;//纵向最大值
            //当前横向
            var headX=this.snake.body[0].x;
            //当前纵向
            var headY=this.snake.body[0].y;
            if (headX<0||headX>=maxX){
                //撞墙了,停止定时器
                clearInterval(timeId);
                alert("游戏结束");
            }
            if (headY<0||headY>=maxY){
                //撞墙了,停止定时器
                clearInterval(timeId);
                alert("游戏结束");
            }
            //判断小蛇有无撞到自己
            for(var i=1;i<this.snake.body.length-1;i++) {
                if (this.snake.body[i].x == headX && this.snake.body[i].y == headY) {
                    clearInterval(timeId);
                    alert("游戏结束");
                }
            }
            //初始化小蛇
            this.snake.init(map);

        }.bind(that),150);
    };

    //为游戏原型添加方法---设置用户按键，改变小蛇移动方向
    Game.prototype.bindkey=function(){
        //获取用户的按键，改变小蛇方向
        document.addEventListener("keydown",function (e) {
            //这里的this应该是触发keydown事件的对象----document
            //所以这里的this就是document
            //获取按键的值
            switch (e.keyCode) {
                case 37:this.snake.direction="left";break;
                case 38:this.snake.direction="top";break;
                case 39:this.snake.direction="right";break;
                case 40:this.snake.direction="bottom";break;
            }
        }.bind(that),false)
    };

    window.Game=Game;
}());