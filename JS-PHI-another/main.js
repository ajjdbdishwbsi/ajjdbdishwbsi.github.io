
function gameLoop() {
    updateGame(); // 游戏逻辑更新
    renderGame(); // 渲染
    requestAnimationFrame(gameLoop);
}


function updateGame() {

    if (gameStatus === 'init' && (performance.now() - startTime) > 1000) { // 开始前等待
        startTime = performance.now();
        gameStatus = 'fadein_pigeon';
    }
    else if (gameStatus === 'fadein_pigeon') {
        ctx.globalAlpha = Math.min((performance.now() - startTime)/1000 ,1); // 淡入图标1
        if (performance.now() - startTime > 2500) {
            gameStatus = 'fadeout_pigeon';
            startTime = performance.now();
        }
    }
    else if (gameStatus === 'fadeout_pigeon') {
        ctx.globalAlpha = Math.max(1-(performance.now()-startTime)/1000 ,0); // 淡出图标1
        if (performance.now() - startTime > 1000) {
            gameStatus = 'fadein_warn';
            startTime = performance.now();
        }
    }
    else if (gameStatus === 'fadein_warn') {
        ctx.globalAlpha = Math.min((performance.now() - startTime)/1000 ,1); // 淡入图标2
        if (performance.now() - startTime > 2500) {
            gameStatus = 'fadeout_warn';
            startTime = performance.now();
        }
    }
    else if (gameStatus === 'fadeout_warn') {
        ctx.globalAlpha = Math.max(1-(performance.now()-startTime)/1000 ,0); // 淡出图标2
        if (performance.now() - startTime > 1000) {
            gameStatus = 'start_screen';
            startTime = performance.now();
        }
    }
    else if (gameStatus === 'start_screen') {
        ctx.globalAlpha = Math.min((performance.now() - startTime)/1000 ,1);
        if (audios[0].paused || audios[0].ended){
            audios[0].currentTime = 0;
            playAudio(0);
            
        }

    }
}

function renderGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (gameStatus === 'fadein_pigeon' || gameStatus === 'fadeout_pigeon') {
        drawImage(images[0],'Height',0.181);
    }
    else if (gameStatus === 'fadein_warn'|| gameStatus === 'fadeout_warn') {
        drawImage(images[1],'Height',0.59,0,-0.05);
    }
    else if (gameStatus === 'start_screen') {
        drawImage(images[2],'Height',1);
        drawImage(images[3],'Height',0.17,0,-0.035);
    }
}

function startgame() {
    console.log('StartGame');
    startTime = performance.now();
    unlockAudio();
    resetAnimationState();
    enterFullscreen();
    stopAndResetAllAudios();
    gameLoop();
    startButton.disabled = true;
}

// 绑定开始按钮点击事件
startButton.addEventListener('click', startgame);
fullscreenButton.addEventListener('click', enterFullscreen);

// 全屏变化事件监听
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);
