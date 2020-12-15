var arr_size = document.getElementById('arr_size');
var viz_speed = document.getElementById('viz_speed');
var graph = document.getElementById('area');


let bars = [];
let barsLen = [];
const defaultColor = "blue";
const defaultMargin = 0.2;



generateArr(graph);
arr_size.addEventListener('input', () => {
    generateArr(graph);
})

let waitingTime = (viz_speed.value == 1) ? 700 : (viz_speed.value == 2) ? 50 : 0.08;
let currTime = 0;
viz_speed.addEventListener("input", () => {
    waitingTime = (viz_speed.value == 1) ? 700 : (viz_speed.value == 2) ? 50 : 0.08;
})




var bubbleButton = document.getElementById('bubble');
bubbleButton.addEventListener('click', () => {
    currTime = 0;
    bubbleSort();
})

var mergeButton = document.getElementById('merge');
mergeButton.addEventListener('click', () => {
    currTime = 0;
    mergeSort();
})

var selectButton = document.getElementById('select');
selectButton.addEventListener('click', () => {
    currTime = 0;
    SelectionSort();
})

var insertionButton = document.getElementById('insert');
insertionButton.addEventListener('click', () => {
    currTime = 0;
    insertionSort();
})

var quickButton = document.getElementById('quick');
quickButton.addEventListener('click', () => {
    currTime = 0;
    quickSort();
})



