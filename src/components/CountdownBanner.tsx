import React, { useEffect } from "react";

const CountdownBanner = () => {
  const countdown = (elementName: string, minutes: number, seconds: number) => {
    let element: HTMLElement | null, endTime: number, hours: number, mins: any, msLeft: string | number | Date, time: Date;

    function twoDigits(n: string | number) {
      return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
      msLeft = endTime - (+new Date);
      if (msLeft < 1000) {
        // TODO: Call powerball calculation smartcontract
        if (element !== null) {
          element.innerHTML = "<br />" +
            "This Powerball lottery has ended..." +
            "<br />" +
            "<br />" +
            "Winning number: 12 34 23 11 54 99" +
            "<br />" +
            "<br />" +
            "0xFF82DCF2A1FA87283A3D277DEBC9A505C7D42F12 is the Winner!";
        }

      } else {
        time = new Date(msLeft);
        hours = time.getUTCHours();
        mins = time.getUTCMinutes();
        if (element !== null) {
          element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
        }
        setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
      }
    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
  }

  useEffect(() => {
    countdown("countdown", 0, 30);
  }, []);

  return (
    <>
      <div id="countdown" style={{textShadow: "none"}}></div>
    </>
  );
};

export default CountdownBanner;
