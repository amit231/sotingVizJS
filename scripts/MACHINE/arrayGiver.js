function randomNumGiver() {
    var max = 180;
    var min = 2;
    return Math.floor(Math.random() * 0.5 * (max - min)) + 10;
}

function generateArr(graph) {
    bars = [];
    barsLen = [];
    graph.innerHTML = "";
    for (let i = 0; i < arr_size.value; i++) {
        barsLen[i] = randomNumGiver();
        bars[i] = document.createElement('div');
        bars[i].style.cssText = "background-color:" + defaultColor + ";width:" + 100 / (arr_size.value - (0.2 * arr_size.value)) + "%;height: " + barsLen[i] + "%;margin-right:" + defaultMargin + "%;";
        graph.appendChild(bars[i]);
    }
}