timeFunc = {
    addHours(time, h) {
        time.setTime(time.getTime() + (h * 60 * 60 * 1000));
        return time;
    },

    addMinutes(time, m) {
        time.setTime(time.getTime() + (m * 60 * 1000));
        return time;
    },

    addSeconds (time, s) {
        time.setTime(time.getTime() + (s * 1000));
        return time;
    },

    getHours(time) {
        let hours;
        if (typeof time !== 'number') {
            hours = time.getHours().toString();
        }
        else {
            hours = Math.floor(time / (1000 * 60 * 60)).toString();
        }
        hours = (hours.length < 2) ? `0${hours}` : hours;
        return hours;
    },

    getMinutes(time) {
        let minutes;
        if (typeof time !== 'number') {
            minutes = time.getMinutes().toString();
        }
        else {
            minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString();
        }
        minutes = (minutes.length < 2) ? `0${minutes}` : minutes;
        return minutes;
    },

    getSeconds(time) {
        let seconds;
        if (typeof time !== 'number') {
            seconds = time.getSeconds().toString();
        }
        else {
            seconds = Math.floor((time % (1000 * 60)) / 1000).toString();
        }
        seconds = (seconds.length < 2) ? `0${seconds}` : seconds;
        return seconds;
    },

    getDiffClock(differenceTime) {
        return `${this.getHours(differenceTime)}:${this.getMinutes(differenceTime)}:${this.getSeconds(differenceTime)}`
    },

    getDiffText(differenceTime) {
        let text = "";

        let hours = this.getHours(differenceTime).replace(/0*/, "");
        if (hours !== "") {
            text += `${hours}h `;
        }

        let minutes = this.getMinutes(differenceTime).replace(/0*/, "");
        if (minutes !== "") {
            text += `${minutes}m `;
        }

        let seconds = this.getSeconds(differenceTime).replace(/0*/, "")
        if(seconds) {
            text += `${seconds}s`
        }

        return text.trim();
    }
};