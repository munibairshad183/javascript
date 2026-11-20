// Answer No 1
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// Answer No 2
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");

// Answer No 3
let num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
let remainder = num % 3;
document.write("The remainder is : " + remainder + "<br><br>");

// Answer No 4
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR<br><br>");

// Answer No 5
let tableNum = 4;
document.write("Table of " + tableNum + "<br>");
document.write(tableNum + "x1=" + (tableNum * 1) + "<br>");
document.write(tableNum + "x2=" + (tableNum * 2) + "<br>");
document.write(tableNum + "x3=" + (tableNum * 3) + "<br>");
document.write(tableNum + "x4=" + (tableNum * 4) + "<br>");
document.write(tableNum + "x5=" + (tableNum * 5) + "<br>");
document.write(tableNum + "x6=" + (tableNum * 6) + "<br>");
document.write(tableNum + "x7=" + (tableNum * 7) + "<br>");
document.write(tableNum + "x8=" + (tableNum * 8) + "<br>");
document.write(tableNum + "x9=" + (tableNum * 9) + "<br>");
document.write(tableNum + "x10=" + (tableNum * 10) + "<br><br>");

// Answer No 6
let celsius = 25;
let fahrenheitResult = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitResult + "°F<br>");

let fahrenheit = 70;
let celsiusResult = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusResult + "°C<br><br>");

// Answer No 7
let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;
let totalOrderCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1><br>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalOrderCost + "<br><br>");

// Answer No 8
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

// Answer No 9
let totalPKR = (10 * 104.80) + (25 * 28);
document.write("<h1>Currency in PKR</h1><br>");
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

// Answer No 10
let initialNum = 10;
let arithmeticResult = ((initialNum + 5) * 10) / 2;
document.write("Result: " + arithmeticResult + "<br><br>");

// Answer No 11
let currentYear = 2016;
let birthYear = 1992;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write("<h1>Age Calculator</h1><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age1 + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");

// Answer No 12
let radius = 20;
let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1><br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

// Answer No 13
let favoriteSnack = "chocolate chip";
let currentAge = 15;
let maxAge = 65;
let amountPerDay = 3;
let totalSnacks = (maxAge - currentAge) * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);
