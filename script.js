window.onload=function() {
    var now;
    var num;
    var playerName = [];    /*玩家名*/
    var playerAward = [];    /*玩家获奖列表*/
    for (let i = 0; i < 12; i++) {
        playerAward[i] = "";
    }
    //-----------------------主界面-----------------------
    let start = document.getElementById("start");
    start.onclick = function () {    //点击开始游戏进入设置界面
        let mainPage = document.getElementsByClassName("mainPage");
        for (let i = 0; i < mainPage.length; i++) {
            mainPage[i].style.display = "none";
        }
        let setNumPage = document.getElementsByClassName("setNumPage");
        for (let i = 0; i < setNumPage.length; i++) {
            setNumPage[i].style.display = "block";
        }
    };
    let rule = document.getElementById("rule");
    rule.onclick = function () {
        let mainPage = document.getElementsByClassName("mainPage");
        mainPage[0].style.display = "none";
        let rulePage = document.getElementsByClassName("rulesPage");
        rulePage[0].style.display = "block";
    }
    let present = document.getElementById("present");
    present.onclick = function () {    //点击开始游戏进入设置界面
        let mainPage = document.getElementsByClassName("mainPage");
        for (let i = 0; i < mainPage.length; i++) {
            mainPage[i].style.display = "none";
        }
        let setPresentPage = document.getElementsByClassName("setPresentPage");
        for (let i = 0; i < setPresentPage.length; i++) {
            setPresentPage[i].style.display = "block";
        }
    };
    //------------------------规则界面---------------------------
    let retbtn = document.getElementById("ret");
    retbtn.onclick = function () {
        let rulesPage = document.getElementsByClassName("rulesPage");
        rulesPage[0].style.display = "none";
        let mainPage = document.getElementsByClassName("mainPage");
        mainPage[0].style.display = "block";
    }

    //-----------------------设置人数界面-------------------------
    let enter = document.getElementById("enter");
    let backToMain = document.getElementById("backToMain");
    let clear = document.getElementById("clear");
    enter.onclick = function () {
        let reg = /^[1-9]$|^1[012]$/;
        let number = document.getElementById("number");
        num = number.value;
        now = 0;
        if (reg.test(num) == true) {    //如果符合要求则转换为数字，进入游戏界面
            num = num - 0;
            /*-----------------------------------------------------------------创建玩家数据---------------*/
            for (let i = 0; i < num; i++) {
                playerName[i] = "玩家" + (i + 1)
                playerAward[i] = "";
            }
            /*---------------------------将玩家名贴到房间成员*/
            for (let i = 0; i < 12; i++) {
                let player = "player" + (i + 1);
                if (i < num) {
                    let text = playerName[i] + "    中:";
                    document.getElementById(player).innerText = text;
                } else {
                    document.getElementById(player).innerText = "";
                }
            }
            let setNumberPage = document.getElementsByClassName("setNumPage");
            for (let i = 0; i < setNumberPage.length; i++) {
                setNumberPage[i].style.display = "none";
            }
            let playPage = document.getElementsByClassName("playPage");
            playPage[0].style.display = "block";
            let playing = document.getElementsByClassName("playing");
            playing[0].style.display = "none";
            let waiting = document.getElementsByClassName("waiting");
            waiting[0].style.display = "block";
        } else {
            alert("输入不合法，请输入1~12的数字。");
        }
    };
    clear.onclick = function () {
        for (let i = 0; i < 12; i++) {
            playerAward[i] = "";
            playerName[i] = "";
        }
        alert("数据已被清空");
    }
    backToMain.onclick = function () {
        let setNumPage = document.getElementsByClassName("setNumPage");
        setNumPage[0].style.display = "none";
        let mainPage = document.getElementsByClassName("mainPage");
        mainPage[0].style.display = "block";
    }
    //--------------------------------礼物设置界面----------------------
    let backToMain2 = document.getElementById("backToMain2");
    backToMain2.onclick = function () {
        let setPresentPage = document.getElementsByClassName("setPresentPage");
        setPresentPage[0].style.display = "none";
        let mainPage = document.getElementsByClassName("mainPage");
        mainPage[0].style.display = "block";
    }
};
