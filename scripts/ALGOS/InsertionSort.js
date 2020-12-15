function insertionSort() {
    for (let i = 0; i < arr_size.value; i++) {
        barFrameUpdate(bars[i], barsLen[i], "yellow");
        let key = barsLen[i];
        let j = i - 1;
        while (j >= 0 && barsLen[j] > key) {
            barsFrameUpdate(bars[j], barsLen[j], bars[j + 1], barsLen[j + 1], "red");
            barsLen[j + 1] = barsLen[j];
            barsFrameUpdate(bars[j], barsLen[j], bars[j + 1], barsLen[j + 1], "red");
            barFrameUpdate(bars[j], barsLen[j], "blue");
            if (j == (i - 1)) {
                barFrameUpdate(bars[j + 1], barsLen[j + 1], "yellow");
            }
            else {
                barFrameUpdate(bars[j + 1], barsLen[j + 1], "blue");
            }
            j--;
        }
        barsLen[j + 1] = key;
        for (let temp = 0; temp < i; temp++) {
            barFrameUpdate(bars[temp], barsLen[temp], "green");
        }
    }
    barFrameUpdate(bars[i - 1], barsLen[i - 1], "green");
}
