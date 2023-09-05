const btns = [...document.getElementsByClassName("btn")];
const keyCodes = [...btns.map((number) => number.dataset.keycode)];
const display = document.getElementById("display");

document.addEventListener("keydown", (e) => {
    const v = e.keyCode.toString();
    calc(v);
});

document.addEventListener("click", (e) => {
    const v = e.target.dataset.keycode;
    calc(v);
});

function calc(k) {
    if (keyCodes.includes(k)) {
        switch (k) {
            case "96":
                display.innerHTML += "0";
                break;
            case "97":
                display.innerHTML += "1";
                break;
            case "98":
                display.innerHTML += "2";
                break;
            case "99":
                display.innerHTML += "3";
                break;
            case "100":
                display.innerHTML += "4";
                break;
            case "101":
                display.innerHTML += "5";
                break;
            case "102":
                display.innerHTML += "6";
                break;
            case "103":
                display.innerHTML += "7";
                break;
            case "104":
                display.innerHTML += "8";
                break;
            case "105":
                display.innerHTML += "9";
                break;
            case "107":
                display.innerHTML += " + ";
                break;
            case "109":
                display.innerHTML += " - ";
                break;
            case "106":
                display.innerHTML += " * ";
                break;
            case "111":
                display.innerHTML += " / ";
                break;
            case "110":
                display.innerHTML += ".";
                break;
            case "53":
                display.innerHTML += "(";
                break;
            case "219":
                display.innerHTML += ")";
                break;
            case "8":
                error.innerHTML = "";
                display.innerHTML = "";
                break;
            case "13":
                if (display.innerHTML.includes("=")) {
                    display.innerHTML = display.innerHTML.split("=")[1];
                }

                try {
                    display.innerHTML += " = " + eval(display.innerHTML);
                    break;
                } catch (e) {
                    error.innerHTML = e;
                    error.classList.add("active");

                    setTimeout(() => {
                        error.innerHTML = "";
                        error.classList.remove("active");
                    }, 3000);
                    break;
                }
        }
    } else {
        return;
    }
}
