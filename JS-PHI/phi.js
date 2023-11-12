function timer(timer_option){
    if (timer_option == 'Start'){

    }
}


//定义等待命令(无用)
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
}

//定义fadein
//fadeIn(元素代号，总时间-ms)
function fadeIn(element,time) {
    var opacity_ = 0.1;  // 初始透明度为0.1
    var timer_ = setInterval(function () {
        if (opacity_ >= 1){
            clearInterval(timer_);  // 清除计时器
        }
        element.style.opacity = opacity_;  // 设置元素透明度
        element.style.filter = 'alpha(opacity=' + opacity_ * 100 + ")";  // 兼容IE浏览器
        opacity_ += opacity_ * 0.01;  // 透明度增加0.01倍
    }, time/100);  // 每time/100毫秒执行一次，实现渐入效果
}

//定义fadeOut
//fadeOut(元素代号，总时间-ms)
function fadeOut(element,time) {
    var opacity_ = 1;  // 初始透明度为1
    var timer_ = setInterval(function () {
        if (opacity_ <= 0.05){
            clearInterval(timer_);  // 清除计时器
        }
        element.style.opacity = opacity_;  // 设置元素透明度
        element.style.filter = 'alpha(opacity=' - opacity_ * 100 + ")";  // 兼容IE浏览器
        opacity_ -= opacity_ * 0.01;  // 透明度-0.01倍
    }, time/100);  // 每time/100毫秒执行一次，实现渐出效果
}

//hide
function hide(ele) {
    ele.style.opacity = '0';
    ele.style.height = '0px';
    ele.style.width = '0px';
}
//show
function show(ele) {
    ele.style.opacity = '1';
    ele.style.height = 'auto';
    ele.style.width = 'auto';
}




//定义元素，方便使用
var PigeonGames_icon = document.getElementById('PigeonGames_icon');
var Startscreen_Warning = document.getElementById('Warning');
var StartBG = document.getElementById('StartBG');
var phigros_icon = document.getElementById('phigros_icon');
PigeonGames_icon.style.opacity = '0';
hide(StartBG)


const TouchToStart = new Audio('./audio-assets/TouchToStart.wav')



var gametime = 0;  // gametime=0
var gametime_ = setInterval(function () {
    if (gametime <= -1){
        clearInterval(gametime_);  // 清除计时
    }

    
//start pigeon图标展示
    if (gametime == 100){
        fadeIn(PigeonGames_icon,500)
    }
    if (gametime == 700){
        fadeOut(PigeonGames_icon,300)
    }
    if (gametime == 1001){
        hide(PigeonGames_icon)
    }
//end pigeon图标展示

//start Warning
    if (gametime == 1050){
        Startscreen_Warning.style.opacity = '0';
        Startscreen_Warning.style.height = 'auto';
        Startscreen_Warning.style.width = 'auto';
    }
    if (gametime == 1051){
        fadeIn(Startscreen_Warning,500)
    }
    if (gametime == 1851){
        fadeOut(Startscreen_Warning,300)
    }
    if (gametime == 2160){
        hide(Startscreen_Warning)
    }
//end Warning

//start BG
    if (gametime == 2161){
        StartBG.style.opacity = '0';
        StartBG.style.height = '100%';
        StartBG.style.width = '100%';
    }
    if (gametime == 2162){

        show(phigros_icon)
        phigros_icon.style.width = '30%';
        fadeIn(StartBG,300)
        fadeIn(phigros_icon,300)
        TouchToStart.play()
        TouchToStart.loop = true;
        //TouchToStart.pause;
    }
//end BG






/*
    if (gametime == 2962){
        fadeOut(StartBG,300)
    }
    if (gametime == 3271){
        StartBG.style.opacity = '0';
        StartBG.style.height = '0px';
        StartBG.style.width = '0px';
    }
*/




    gametime++;  // gametime+1
}, 1);  // 每1毫秒执行一次


/*

for (let i = 0; i < 10; i++) {
    PigeonGames_icon.style.opacity = i/10;
    //setTimeout(function() { console.log("Hello World!"); }, 10000);
    wait(100);
    console.log('a')
}

*/