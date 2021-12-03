const bill = document.querySelector("#bill-input");

const fiveBtn = document.querySelector("#five");
const tenBtn = document.querySelector("#ten");
const fifteenBtn = document.querySelector("#fifteen");
const twentyFiveBtn = document.querySelector("#twenty-five");
const fiftyBtn = document.querySelector("#fifty");
const custom = document.querySelector("#custom");

let totalValue = document.querySelector("#total-value");
let tipAmount = document.querySelector("#tip-amount-value");

const numOfPeople = document.querySelector("#num-of-people-input");

const resetBtn = document.querySelector("#reset");

function handler(btn) {
    let content = btn.textContent;
    let contentCustom = btn.value;
    switch (content) {
        case "5%":
            return 5

        case "10%":
            return 10;

        case "15%":
            return 15

        case "25%":
            return 25

        case "50%":
            return 50

        default:
            return +contentCustom;
    }
}

function handle(btn) {
    let totalPeople = +numOfPeople.value;
    if(totalPeople) {
        let handlerOutput = handler(btn);
        let billValue = +bill.value;
        console.log(handlerOutput)
        let calculated = handlerOutput / 100 * billValue;
        totalValue.textContent = "$" +calculated;
        tipAmount.textContent = "$" + calculated / totalPeople;
    } else if (totalPeople === 0) {
        tipAmount.textContent = "Can't be 0"
    } else  tipAmount.textContent = "Can't be empty"
}

fiveBtn.onclick = (e) => {
    e.preventDefault();
    handle(fiveBtn)
}

tenBtn.onclick = (e) => {
    e.preventDefault();
    handle(tenBtn)
}

fifteenBtn.onclick = (e) => {
    e.preventDefault();
    handle(fifteenBtn)
}

twentyFiveBtn.onclick = (e) => {
    e.preventDefault();
    handle(twentyFiveBtn)
}

fiftyBtn.onclick = (e) => {
    e.preventDefault();
    handle(fiftyBtn)
}

custom.onchange = (e)=> {
        console.log("here")
        handle(custom)
    }

resetBtn.onclick = ()=> {
    bill.value = "";
    totalValue.textContent = "$0.00";
    tipAmount.textContent =  "$0.00";
    totalPeople = "0";
    custom.value = "";
    numOfPeople.value = "";
    bill.focus();
}