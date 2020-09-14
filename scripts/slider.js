const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyle = getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");

const minPos = 0;
const stepWidth = getComputedStyle(items[0]).width;
const step = parseInt(stepWidth);
const preShownItems = 300 / step;
const maxPos = (items.length - preShownItems) * step;
let currentPos = 0;



rightArrow.addEventListener("click", e => {
    e.preventDefault();

    let currentPos = parseInt(computedStyle.right);

    if (currentPos < maxPos) {
        itemsList.style.right = currentPos + step + "px";
    }
});

leftArrow.addEventListener("click", e => {
    e.preventDefault();

    let currentPos = parseInt(computedStyle.right);

    if (currentPos > minPos) {
        itemsList.style.right = currentPos - step + "px";
    }
});