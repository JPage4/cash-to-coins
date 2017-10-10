let dollarAmount = .10
const piggyBank = {pennies: 0, nickels: 0, dimes: 0, quarters: 0}   

//figure out a loop for this later

let quarters = Math.floor(dollarAmount / .25)
    piggyBank.quarters = quarters
    dollarAmount = dollarAmount - (quarters * .25)
    console.log(dollarAmount.toFixed(2))

let dimes = Math.floor(dollarAmount / .10)
    piggyBank.dimes = dimes
    dollarAmount = dollarAmount - (dimes * .10)
    console.log(dollarAmount.toFixed(2))

let nickels = Math.floor(dollarAmount / .05)
    piggyBank.nickels = nickels
    dollarAmount = dollarAmount - (nickels * .05)
    console.log(dollarAmount.toFixed(2))

let pennies = Math.floor(dollarAmount / .01)
    piggyBank.pennies = pennies
    dollarAmount = dollarAmount - (pennies * .01)
    console.log(dollarAmount.toFixed(2))

console.log(piggyBank)