const timeText = document.getElementById("timeText");

let endingTime = new Date(Date.now());
endingTime = timeFunc.addHours(endingTime, initialHours);
endingTime = timeFunc.addMinutes(endingTime, initialMinutes);
endingTime = timeFunc.addSeconds(endingTime, initialSeconds);

let maxTime = new Date(Date.now());
maxTime = timeFunc.addHours(maxTime, maxHours);
maxTime = timeFunc.addMinutes(maxTime, maxMinutes);
maxTime = timeFunc.addSeconds(maxTime, maxSeconds);

let countdownEnded = false;
let users = [];
let time;

const getNextTime = () => {
    let currentTime = new Date(Date.now());
    let differenceTime = endingTime - currentTime;
    time = timeFunc.getDiffClock(differenceTime);
    if (differenceTime <= 0) {
        clearInterval(countdownUpdater);
        countdownEnded = true;
        time = "00:00:00";
    }
    timeText.innerText = time;
};

let countdownUpdater = setInterval(() => {
    getNextTime();
}, 100);



const addTime = async (time, s) => {
    if (endingTime < maxTime) {
        endingTime = timeFunc.addSeconds(time, s);

        let diffTime = timeFunc.addSeconds(new Date(0), s) - new Date(0);
        if (endingTime > maxTime) {
            diffTime = endingTime - maxTime;
            endingTime = maxTime;
        }

        let addedTime = document.createElement("p");
        addedTime.classList = "addedTime";
        addedTime.innerText = `+${timeFunc.getDiffText(diffTime)}`;
        document.body.appendChild(addedTime);
        addedTime.style.display = "block";
        await sleep(50);
        addedTime.style.left = `${randomInRange(35, 65)}%`;
        addedTime.style.top = `${randomInRange(15, 40)}%`;
        addedTime.style.opacity = "1";
        await sleep(2500);
        addedTime.style.opacity = "0";
        await sleep(500);
        addedTime.remove();
    }
};



const testAddTime = (times, delay) => {
    let addTimeInterval = setInterval(async () => {
        if (times > 0) {
            await sleep(randomInRange(50, delay-50));
            addTime(endingTime, 30);
            --times;
        }
        else {
            clearInterval(addTimeInterval);
        }
    }, delay);
};