function barFrameUpdate(cont, height, color) {
    window.setTimeout(function () {
        cont.style.cssText = " margin-right: " + defaultMargin + "%; width:" + 100 / (arr_size.value - (0.2 * arr_size.value)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, currTime = currTime + waitingTime);
}
function barsFrameUpdate(cont, height, cont2, height2, color) {
    window.setTimeout(function () {
        cont.style = " margin-right: " + defaultMargin + "%; width:" + 100 / (arr_size.value - (0.2 * arr_size.value)) + "%; height:" + height + "%; background-color:" + color + ";";
        cont2.style = " margin-right: " + defaultMargin + "%; width:" + 100 / (arr_size.value - (0.2 * arr_size.value)) + "%; height:" + height2 + "%; background-color:" + color + ";";
    }, currTime = currTime + waitingTime);
}


