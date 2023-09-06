const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");

function turnOnRed() {
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "gray";
    greenLight.style.backgroundColor = "gray";
}

function turnOnYellow() {
    redLight.style.backgroundColor = "gray";
    yellowLight.style.backgroundColor = "yellow";
    greenLight.style.backgroundColor = "gray";
}

function turnOnGreen() {
    redLight.style.backgroundColor = "gray";
    yellowLight.style.backgroundColor = "gray";
    greenLight.style.backgroundColor = "green";
}

function startTrafficLights() {
    const startTime = performance.now();

    const intervalId = setInterval(() => {
        turnOnGreen();
        setTimeout(() => {
            turnOnYellow();
            setTimeout(() => {
                turnOnRed();
            }, 1000); // 2 segundos en amarillo
        }, 2000); // 1 segundo en verde
    }, 7000); // 4 segundos en rojo

    // Detener el semáforo después de cierto tiempo (por ejemplo, 30 segundos)
    setTimeout(() => {
        clearInterval(intervalId);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        document.getElementById("execution-time").textContent = executionTime.toFixed(2);
    }, 60000);
}

startTrafficLights();

