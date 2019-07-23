//获取标签a
var ass=document.getElementsByTagName("a");
//获取左span
var spanl=document.getElementsByClassName("left");
//获取右span
var spanr=document.getElementsByClassName("right");
//获取li
var list=document.getElementsByTagName("li");

//给每个li添加索引
for (var i=0;i<list.length;i++){
    list[i].setAttribute("index",i);
    //当li被点击时，将所有li的class隐藏，再将被点击的li的class改为current
    list[i].onclick=function () {
        for (var j=0;j<list.length;j++){
            list[j].removeAttribute("class");
        }
        this.className="selected";
        //同时将该li的索引复制出来，用于a的隐藏和显示
        var num=this.getAttribute("index");
        console.log(num);
        for (var k=0;k<ass.length;k++){
            ass[k].removeAttribute("class");
        }
        ass[num].className="current";
    };
}
var num,num1,num2;
//给spanl添加点击事件
spanl[0].onclick=function () {
    num1=document.getElementsByClassName("selected")[0].getAttribute("index");
    num=Number(num1);
    for (var l=0;l<list.length;l++){
        list[l].removeAttribute("class");
    }
    for (var m=0;m<ass.length;m++){
        ass[m].removeAttribute("class");
    }
    if (num==0){
        list[4].className="selected";
        ass[4].className="current";
    } else{
        list[num-1].className="selected";
        ass[num-1].className="current";
    }
    num=document.getElementsByClassName("selected")[0].getAttribute("index");
    console.log(num);
};
//给spanr添加点击事件
spanr[0].onclick=function () {
    num2=document.getElementsByClassName("selected")[0].getAttribute("index");
    num=Number(num2);
    for (var l=0;l<list.length;l++){
        list[l].removeAttribute("class");
    }
    for (var m=0;m<ass.length;m++){
        ass[m].removeAttribute("class");
    }
    if (num==4){
        list[0].className="selected";
        ass[0].className="current";
    } else{
        list[num+1].className="selected";
        ass[num+1].className="current";
    }
    // if (num2==0){
    // 	list[1].className="selected";
    // 	ass[1].className="current";
    // } else if (num2==4) {
    // 	list[0].className = "selected";
    // 	ass[0].className = "current";
    // }else if (num2==3){
    // 	list[4].className="selected";
    // 	ass[4].className="current";
    // }else if(num2==2){
    // 	list[3].className="selected";
    // 	ass[3].className="current";
    // }else {
    // 	list[2].className="selected";
    // 	ass[2].className="current";
    // }
    num2=document.getElementsByClassName("selected")[0].getAttribute("index");
    console.log(num);
};
