function quickSort() {
    algo(0, arr_size.value - 1);
}

function algo(start, end) {
    if (start < end) {
        var i = start + 1;
        var piv = barsLen[start];
        barFrameUpdate(bars[start], barsLen[start], "yellow");
        for (var j = start + 1; j <= end; j++) {
            if (barsLen[j] < piv) {
                barFrameUpdate(bars[j], barsLen[j], "yellow");
                barsFrameUpdate(bars[i], barsLen[i], bars[j], barsLen[j], "red");
                var temp = barsLen[i];
                barsLen[i] = barsLen[j];
                barsLen[j] = temp;
                barsFrameUpdate(bars[i], barsLen[i], bars[j], barsLen[j], "red")
                barsFrameUpdate(bars[i], barsLen[i], bars[j], barsLen[j], "blue");
                i += 1;
            }
        }
        barsFrameUpdate(bars[start], barsLen[start], bars[i - 1], barsLen[i - 1], "red");
        var temp = barsLen[start];
        barsLen[start] = barsLen[i - 1];
        barsLen[i - 1] = temp;
        barsFrameUpdate(bars[start], barsLen[start], bars[i - 1], barsLen[i - 1], "red");
        for (var t = start; t <= i; t++) {
            barFrameUpdate(bars[t], barsLen[t], "green");
        }
        var piv_pos = i - 1;

        algo(start, piv_pos - 1);
        algo(piv_pos + 1, end);
    }
}
