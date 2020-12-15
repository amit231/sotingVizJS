function mergeSort() {
    partitions(0, arr_size.value - 1);
}
function merge(start, mid, end) {
    var p = start, q = mid + 1;
    var auxilaryArr = [], k = 0;
    for (var i = start; i <= end; i++) {
        if (p > mid) {
            auxilaryArr[k] = barsLen[q];
            k++;
            q++;
            barFrameUpdate(bars[q - 1], barsLen[q - 1], "red");
        }
        else if (q > end) {
            auxilaryArr[k] = barsLen[p];
            k++;
            p++;
            barFrameUpdate(bars[p - 1], barsLen[p - 1], "red");
        }
        else if (barsLen[p] < barsLen[q]) {
            auxilaryArr[k] = barsLen[p];
            k += 1;
            p += 1;
            barFrameUpdate(bars[p - 1], barsLen[p - 1], "red");
        }
        else {
            auxilaryArr[k] = barsLen[q];
            k++;
            q++;
            barFrameUpdate(bars[q - 1], barsLen[q - 1], "red");
        }
    }
    for (var t = 0; t < k; t++) {
        barsLen[start] = auxilaryArr[t];
        start++;
        barFrameUpdate(bars[start - 1], barsLen[start - 1], "green");
    }
}

function partitions(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        barFrameUpdate(bars[mid], barsLen[mid], "yellow");
        partitions(start, mid);
        partitions(mid + 1, end);
        merge(start, mid, end);
    }
}
