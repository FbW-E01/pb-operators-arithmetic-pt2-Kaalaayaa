const totalRevenue = 6450;
const priceTicket = 15;
const numberPeople = totalRevenue / priceTicket;
console.log(`${numberPeople} people bought tickets`);

const incomePerweek = 500;
const weekPermonth= 4;
const year = 12;
console.log(incomePerweek * weekPermonth);
const salaryperMonth = 2000;
console.log(`Sylvia earns ${salaryperMonth* year} per year`);


const percentResult = (17 / 30 * 100);
console.log(percentResult,"%");

const calcPercent = (17 * 100) / 30;
console.log(`${calcPercent}%`);


const perimeterSquare = 4 * 4.75;
console.log(`Perimeter of square:${perimeterSquare}cm`);

const perimeterTriangle = 5 + 6 + 7;
console.log(`Perimeter of triange: ${perimeterTriangle}cm`);

const areaSquare = 5 * 5;
console.log(`Area of square = ${areaSquare}cm²`);

const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(halfPerimeter*(halfPerimeter-triSideLength1)*(halfPerimeter-triSideLength2)*(halfPerimeter-triSideLength3));
console.log(`Area of triangle = ${areaTriangle}cm²`);


const volumeCube = 9 * 9 * 9;
console.log(`Volume of cube = ${volumeCube}`);


const billOne = 22.35;
const billTwo = 26.67;
const billThree = 35.92;
const tenPercentTip = 1.1;
const fifteenPercentTip = 1.15;
const twentyPercentTip = 1.2;
console.log(
`Bill One: EUR${billOne * tenPercentTip}
Bill Two: EUR${billTwo * fifteenPercentTip}
Bill Three: EUR${billThree * twentyPercentTip}`);

const averageHours = (8 + 6 + 5 + 9 + 8 + 2+ 1 + 8.5 + 7 + 4) /10;
console.log(`Noemy's average hours: ${averageHours}`);



const firstFiveResults = 75 + 70 + 85 + 90 + 100; 
const totalResult = 85 * 6;
const sixthResult = totalResult - firstFiveResults;
console.log(`Score in the sixth test: ${sixthResult}`);

const averageOfEightTests = 78 * 8; 
const averageNeeded = 80 * 9;
const minResult = averageNeeded - averageOfEightTests;
console.log(`James needs a minimum of ${minResult}% to get an 80% average`);
