window.onload=function(){
    var now;
    var num;
    var playerName=[];    /*玩家名*/
    var playerAward=[];    /*玩家获奖列表*/
    for(let i=0;i<12;i++){
        playerAward[i]="";
    }
    //-----------------------主界面-----------------------
    var start=document.getElementById("start");
    start.onclick=function () {    //点击开始游戏进入设置界面
        var mainPage=document.getElementsByClassName("mainPage");
        for(var i=0;i<mainPage.length;i++){
            mainPage[i].style.display="none";
        }
        var setNumPage=document.getElementsByClassName("setNumPage");
        for(var i=0;i<setNumPage.length;i++){
            setNumPage[i].style.display="block";
        }
    };
    var rule=document.getElementById("rule");
    rule.onclick=function () {
        var mainPage=document.getElementsByClassName("mainPage");
        mainPage[0].style.display="none";
        var rulePage=document.getElementsByClassName("rulesPage");
        rulePage[0].style.display="block";
    }

    //------------------------规则界面---------------------------
    var retbtn=document.getElementById("ret");
    retbtn.onclick=function () {
        var rulesPage=document.getElementsByClassName("rulesPage");
        rulesPage[0].style.display="none";
        var mainPage=document.getElementsByClassName("mainPage");
        mainPage[0].style.display="block";
    }

    //-----------------------设置人数界面-------------------------
    var enter = document.getElementById("enter");
    var backToMain=document.getElementById("backToMain");
    var clear = document.getElementById("clear");
    enter.onclick=function () {
        var reg=/^[1-9]$|^1[012]$/;
        let number = document.getElementById("number");
        num=number.value;
        now=0;
        if(reg.test(num)==true){    //如果符合要求则转换为数字，进入游戏界面
            num=num-0;
            /*-----------------------------------------------------------------创建玩家数据---------------*/
            for(let i=0;i<num;i++){
                playerName[i]="玩家"+(i+1)
                playerAward[i]="";
            }
            /*---------------------------将玩家名贴到房间成员*/
            for(let i=0;i<12;i++){
                let player="player"+(i+1);
                if(i<num){
                    let text=playerName[i]+"    中:";
                    document.getElementById(player).innerText=text;
                }
                else {
                    document.getElementById(player).innerText="";
                }
            }
            var setNumberPage=document.getElementsByClassName("setNumPage");
            for(var i=0;i<setNumberPage.length;i++){
                setNumberPage[i].style.display="none";
            }
            var playPage=document.getElementsByClassName("playPage");
            playPage[0].style.display="block";
            let playing=document.getElementsByClassName("playing");
            playing[0].style.display="none";
            let waiting=document.getElementsByClassName("waiting");
            waiting[0].style.display="block";
        }
        else {
            alert("输入不合法，请输入1~12的数字。");
        }
    };
    clear.onclick=function () {
        for(let i=0;i<12;i++){
            playerAward[i]="";
            playerName[i]="";
        }
        alert("数据已被清空");
    }
    backToMain.onclick=function () {
        var setNumPage=document.getElementsByClassName("setNumPage");
        setNumPage[0].style.display="none";
        var mainPage=document.getElementsByClassName("mainPage");
        mainPage[0].style.display="block";
    }

    //--------------------------------游戏界面--------------------------
    var backToSet=document.getElementById("backToSet");
    backToSet.onclick=function () {
        /*返回设置界面*/
        var afterRoll=document.getElementsByClassName("afterRoll");
        afterRoll[0].style.display="none";
        var playPage=document.getElementsByClassName("playPage");
        playPage[0].style.display="none";
        var setNumPage=document.getElementsByClassName("setNumPage");
        setNumPage[0].style.display="block";
        var playing=document.getElementsByClassName("playing");
        playing[0].style.display="none";
        var waiting=document.getElementsByClassName("waiting");
        waiting[0].style.display="block";
    }
    var goToPlay=document.getElementById("goToPlay");
    goToPlay.onclick=function () {
        /*设置游戏界面当前玩家*/
        now=0;
        document.getElementById("who").innerText=playerName[now];
        var waiting=document.getElementsByClassName("waiting");
        waiting[0].style.display="none";
        var playing=document.getElementsByClassName("playing");
        playing[0].style.display="block";
    }
    /*---------------------------------游戏内容-------------------*/
    var clickToPlay=document.getElementById("clickToPlay");
    clickToPlay.onclick=function () {
        var dices=["../source/1.png","../source/2.png","../source/3.png","../source/4.png","../source/5.png","../source/6.png"];
        var tips=["状元插金花！","六杯红！","六杯黑！","五王！","五子带一秀！","五子登科！","状元！","对堂！","三红！","四进！","二举！","一秀！","yee~啥也没中"];
        var dicesResult=[];    /*-------------骰子结果*/
        let dicesResultSort=[0,0,0,0,0,0,0];
        var awardTemp=[];

        /*-----------------------------------当前玩家骰子出结果过程-----------*/
        for(var j=0;j<6;j++){
            dicesResult[j]=(Math.ceil(Math.random()*6));
            document.getElementById(("d0"+(j+1))).src=dices[dicesResult[j]-1];    /*贴图*/
        }
        for(let j =0;j<6;++j){
            dicesResultSort[dicesResult[j]]++;
        }
        var grade;
        if(dicesResultSort[4]===4&&dicesResultSort[1]===2)
            grade =0;
        else if(dicesResultSort[4]===6)
            grade =1;
        else if(dicesResultSort[6]===6)
            grade =2;
        // else if(dicesResultSort[1]==6||dicesResultSort[2]==6||dicesResultSort[3]==6||dicesResultSort[5]==6||dicesResultSort[6]==6) return "黑六勃";
        else if(dicesResultSort[4]===5)
            grade =3;
        else if(dicesResultSort[3]===5&&dicesResultSort[4]===1)
            grade =4;
        else if(dicesResultSort[3]===5)
            grade =5;
        //  else if(pnum[1]==5||pnum[2]==5||pnum[3]==5||pnum[5]==5||pnum[6]==5) return "五子登科";
        else if(dicesResultSort[4]===4)
            grade =6;
        else if(dicesResultSort[1]===1&&dicesResultSort[2]===1&&dicesResultSort[3]===1&&dicesResultSort[4]===1&&dicesResultSort[5]===1&&dicesResultSort[6]===1)
            grade =7;
        else if(dicesResultSort[4]===3)
            grade =8;
        else if(dicesResultSort[2]===4)
            grade =9;
        else if(dicesResultSort[4]===2)
            grade =10;
        else if(dicesResultSort[4]===1)
            grade =11;
        else grade =12;
        var showResult=document.getElementById("showResult");
        showResult.innerText=tips[grade];
        playerAward[now]=tips[grade];


        /*显示结果*/
        var afterRoll=document.getElementsByClassName("afterRoll");
        afterRoll[0].style.display="block";
    }
    var nextPlayer=document.getElementById("nextPlayer");
    nextPlayer.onclick=function () {
        /*更改当前玩家获奖情况*/
        document.getElementById("player"+(now+1)).innerText=playerName[now]+"    中:"+playerAward[now];
        now++;
        if(now<num){
            /*更改当前玩家标签*/
            document.getElementById("who").innerText=playerName[now];
            /*隐藏结果*/
            let afterRoll=document.getElementsByClassName("afterRoll");
            afterRoll[0].style.display="none";
        }
        else {
            /*布置结算界面*/               ///------------------------------做一下
            for(let i=0;i<12;i++){
                let p="p"+(i+1);
                if(i<num){
                    let text=playerName[i]+"            获得:"+playerAward[i];
                    document.getElementById(p).innerText=text;
                }
                else {
                    document.getElementById(p).innerText="";
                }
            }
            /*设置显示*/
            let afterRoll=document.getElementsByClassName("afterRoll");
            afterRoll[0].style.display="none";
            let playPage=document.getElementsByClassName("playPage");
            playPage[0].style.display="none";
            let resultPage=document.getElementsByClassName("resultPage");
            resultPage[0].style.display="block";
        }

        /*判断中奖并存入缓存*/

    }

    //--------------------------结算界面-------------------------------
    var ret=document.getElementById("back");
    ret.onclick=function () {
        var resultPage=document.getElementsByClassName("resultPage");
        resultPage[0].style.display="none";
        var setNumberPage=document.getElementsByClassName("setNumPage");
        setNumberPage[0].style.display="block";
    };
    var again=document.getElementById("again");
    again.onclick=function () {
        /*重置游戏*/
        now=0;
        document.getElementById("who").innerText=playerName[now];
        for(let i=0;i<num;i++){
            playerAward[i]="";
            document.getElementById("player"+(i+1)).innerText=playerName[i]+"    中:";
        }

        var resultPage=document.getElementsByClassName("resultPage");
        resultPage[0].style.display="none";
        let playing=document.getElementsByClassName("playing");
        playing[0].style.display="none";
        let waiting=document.getElementsByClassName("waiting");
        waiting[0].style.display="block";
        var playPage=document.getElementsByClassName("playPage");
        playPage[0].style.display="block";

    }

};