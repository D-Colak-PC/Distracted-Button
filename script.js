count = 0;
const increaseCounter = () => {
    count++;
    document.getElementById("counter").innerHTML = count.toString();
}