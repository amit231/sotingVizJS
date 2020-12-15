function SelectionSort() {
    for (var i = 0; i < arr_size.value - 1; i++) {
        barFrameUpdate(bars[i], barsLen[i], "red");
        var minUntilNow = i;
        for (var j = i + 1; j < arr_size.value; j++) {
            barFrameUpdate(bars[j], barsLen[j], "yellow");
            if (barsLen[j] < barsLen[minUntilNow]) {
                if (minUntilNow != i) {
                    barFrameUpdate(bars[minUntilNow], barsLen[minUntilNow], "blue");
                }
                minUntilNow = j;
                barFrameUpdate(bars[minUntilNow], barsLen[minUntilNow], "red");
            }
            else {
                barFrameUpdate(bars[j], barsLen[j], "blue");
            }
        }
        if (minUntilNow != i) {
            var temp = barsLen[minUntilNow];
            barsLen[minUntilNow] = barsLen[i];
            barsLen[i] = temp;

            barsFrameUpdate(bars[minUntilNow], barsLen[minUntilNow], bars[i], barsLen[i], "red");
            barFrameUpdate(bars[minUntilNow], barsLen[minUntilNow], "blue");
        }
        barFrameUpdate(bars[i], barsLen[i], "green");
    }
    barFrameUpdate(bars[i], barsLen[i], "green");

}
