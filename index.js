for (let i = 0; i <= 9; i++) {
    numbers.innerHTML += `<button class="number" value="${i}">${i}</button>`;
}

const number = document.querySelectorAll(".number");
const display = document.getElementById("display");

number.forEach((number) => {
    number.addEventListener("click", (e) => {
        display.innerHTML += e.target.value;
    });
});

plus.addEventListener("click", () => {
    display.innerHTML += "+";
});

minus.addEventListener("click", () => {
    display.innerHTML += "-";
});

multiply.addEventListener("click", () => {
    display.innerHTML += "*";
});

dot.addEventListener("click", () => {
    display.innerHTML += ".";
});

divide.addEventListener("click", () => {
    display.innerHTML += "/";
});

clear.addEventListener("click", () => {
    display.innerHTML = "";
});

equal.addEventListener("click", () => {
    display.innerHTML = eval(display.innerHTML);
});
