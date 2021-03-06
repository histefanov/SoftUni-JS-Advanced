function createAssemblyLine() {
  return {
    hasClima: function (car) {
      Object.assign(car, {
        temp: 21,
        tempSettings: 21,
        adjustTemp: function () {
          if (this.temp < this.tempSettings) {
            this.temp++;
          } else if (this.temp > this.tempSettings) {
            this.temp--;
          }
        },
      });
    },
    hasAudio: function (car) {
      Object.assign(car, {
        currentTrack: null,
        nowPlaying: function () {
          if (this.currentTrack) {
            console.log(
              `Now playing ${this.currentTrack.name} by ${this.currentTrack.artist}`
            );
          }
        },
      });
    },
    hasParktronic: function (car) {
      Object.assign(car, {
        checkDistance: function (distance) {
          if (distance < 0.1) {
            console.log("Beep! Beep! Beep!");
          } else if (distance >= 0.1 && distance < 0.25) {
            console.log("Beep! Beep!");
          } else if (distance >= 0.25 && distance < 0.5) {
            console.log("Beep!");
          } else {
            console.log("");
          }
        },
      });
    },
  };
}
