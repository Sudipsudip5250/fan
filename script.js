const fan = document.getElementById('img');
let currentSpeed = 2;
let targetSpeed = 2;
let adjustmentInterval;
let isRunning = false;

function myfanoff() {
    if (isRunning) {
        clearInterval(adjustmentInterval);

        decelerationInterval = setInterval(() => {
            if (currentSpeed >= 3) {
                currentSpeed = 0;
                fan.style.animationDuration = '0s';
                clearInterval(decelerationInterval);
                isRunning = false;
            } else {
                currentSpeed += 0.1;
                fan.style.animationDuration = `${currentSpeed}s`;
            }
        }, 100);
    }
}

function adjustSpeed() {
    clearInterval(adjustmentInterval);

    adjustmentInterval = setInterval(() => {

        if (Math.abs(targetSpeed - currentSpeed) < 0.05) {
            currentSpeed = targetSpeed;
            fan.style.animationDuration = currentSpeed === 0 ? '0s' : `${currentSpeed}s`;
            clearInterval(adjustmentInterval);
            if (currentSpeed === 0) isRunning = false;
        } else if (currentSpeed < targetSpeed) {
            currentSpeed += 0.05;
        } else {
            currentSpeed -= 0.05;
        }

        fan.style.animationDuration = `${currentSpeed}s`;
    }, 200);
}

function myfanon() {
    if (!isRunning) {
        isRunning = true;
        targetSpeed = 0.8;
        adjustSpeed();
    } else {
        targetSpeed = 0.8;
        adjustSpeed();
    }
}



function myfan1() {
    if (isRunning) {
        targetSpeed = 0.6;
        adjustSpeed();
    } else {
        myfanon();
        setTimeout(() => myfan1(), 500);
    }
}

function myfan2() {
    if (isRunning) {
        targetSpeed = 0.3;
        adjustSpeed();
    } else {
        myfanon();
        setTimeout(() => myfan2(), 500);
    }
}

function myfan3() {
    if (isRunning) {
        targetSpeed = 0.2;
        adjustSpeed();
    } else {
        myfanon();
        setTimeout(() => myfan3(), 500);
    }
}
