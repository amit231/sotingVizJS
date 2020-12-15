function bubbleSort() {
    for (var i = 0; i < arr_size.value - 1; i++) {
        for (var j = 0; j < arr_size.value - i - 1; j++) {
            barFrameUpdate(bars[j], barsLen[j], "yellow");
            if (barsLen[j] > barsLen[j + 1]) {
                barsFrameUpdate(bars[j], barsLen[j], bars[j + 1], barsLen[j + 1], "red");
                var temp = barsLen[j];
                barsLen[j] = barsLen[j + 1];
                barsLen[j + 1] = temp;
                barsFrameUpdate(bars[j], barsLen[j], bars[j + 1], barsLen[j + 1], "red");
            }
            barFrameUpdate(bars[j], barsLen[j], "blue");
        }
        barFrameUpdate(bars[j], barsLen[j], "green");
    }
    barFrameUpdate(bars[0], barsLen[0], "green");
}
