count = 0;
const increaseCounter = () => {
    count++;
    updatePage();
}

const decreaseCounter = () => {
    count = Math.max(0, count - 1);
    updatePage();
}

const updatePage = () => {
    document.getElementById("counter").innerHTML = count.toString();
}