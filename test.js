window.onload=function(){
    //-----------------------主界面-----------------------
    start.onclick=function () {    //点击开始游戏进入设置界面
        var start=document.getElementById("start");
        var firstPage=document.getElementsByClassName("main");
        for(var i=0;i<firstPage.length;i++){
            firstPage[i].style.display="none";
        }
        var setNumberPage=document.getElementsByClassName("setNum");
        for(var i=0;i<setNumberPage.length;i++){
            setNumberPage[i].style.display="block";
        }
    };

    //-----------------------设置人数界面-------------------------
    var enter = document.getElementById("enter");
    var number = document.getElementById("number");
    var clear = document.getElementById("clear");
    enter.onclick=function () {
        var reg=/^[1-9]$|^1[012]$/;
        var num=number.value;
        if(reg.test(num)==true){    //如果符合要求则转换为数字，进入游戏界面
            num=num-0;
            localStorage.number=num;
            var setNumberPage=document.getElementsByClassName("setNum");
            for(var i=0;i<setNumberPage.length;i++){
                setNumberPage[i].style.display="none";
            }
            //------------------------------------------显示下一个界面

        }
        else {
            alert("输入不合法，请输入1~12的数字。");
        }
    };
    clear.onclick=function () {
        localStorage.clear();
        alert("数据已被清空！");
    }
};