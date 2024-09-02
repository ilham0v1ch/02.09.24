// № 1
let test1 = 17;
let test2 = 22;
let test3 = 19;
let result = test1 + test2 + test3;
let resultt = result / 3;
document.write(resultt);

// № 2
let name = prompt("Ismingizni kiriting");
let lastName = prompt("Familiyangizni kiriting");
alert(`Salom, ${lastName} ${name} Astrumga hush kelibsiz`);

// № 3
var num1 = prompt("1chi sonni kiriting");
var num2 = prompt("2chi sonni kiriting");
var num3 = num1 + num2;
console.log(`qo'shish: ${num3}`);
var num4 = num1 - num2;
console.log(`ayirish: ${num4}`);
var num5 = num1 * num2;
console.log(`ko'paytirish: ${num5}`);
var num6 = num1 / num2;
console.log(`bo'lish: ${num6}`);

// № 4
let tselsiy = prompt("Haroratni selsiy bo'yicha kiriting");
let farangeyt = (tselsiy *9/5) + 32;
let kelvin = parseFloat(tselsiy) + 273.15;
console.log(`Farangeyt: ${farangeyt}`);
console.log(`Kelvin: ${kelvin}`);

// № 5
let rectangleHeight = prompt("To'rtburchakning uzunligini kiriting");
let rectangleWeight = prompt("To'rtburchakning kengligini kiriting");
let rectangleResult = rectangleHeight * rectangleWeight;
console.log(`To'rtburchakning maydoni: ${rectangleResult}`);

// № 6
let rectangleheight = prompt("To'g'ri to'rtburchakning uzunligini kiriting");
let rectangleweight = prompt("To'g'ri to'rtburchakning kengligini kiriting");
let surface = rectangleheight * rectangleweight;
console.log(`To'g'ri to'rtburchakning yuzasi: ${surface}`);
let perimetr = 4 * rectangleheight * rectangleweight;
console.log(`To'g'ri to'rtburchakning perimetri: ${perimetr}`);
