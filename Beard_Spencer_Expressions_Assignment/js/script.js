 /*
Spencer Beard
SDI Section #1
Assignment: Expressions
9/6/2015
 */

 //welcome message and initial prompt
 alert("Hi. I am here to help you figure out how much \nextra money you have at the end of the month.");
 var userName = prompt("First, what's your name?");
 alert("Nice to meet you " + userName + ". Let's see if I can help you out. Oh, and do me a favor please leave out the $ in your answers. Thank you.");

 console.log(userName);

 //prompt user for the amount of money they spend on monthly bills
 var bills = prompt("How much do you spend on monthly bills (rent/mortgage, utilities, insurance, etc.)?");

 console.log(bills);

 //show user what they entered for bills and prompt for food spending
 //alert("You spend $"+bills+" on monthly bills.");
 var groceries = prompt("You spend $" + bills + " on monthly bills. \nI'm sure you eat food, right? How much would you say you spend on food each month?");

 console.log(groceries);

 //show user what they entered for groceries and prompt for other expenses
 //alert("You spend $"+groceries+" on food every month.");
 var otherExpenses = prompt("You spend $" + groceries + " on food every month. \nIf there are any other regular expenses you have, total them up. How much do you" + " spend on other regular expenses?");

 console.log(otherExpenses);
 alert("You spend $"+otherExpenses+" on all other expenses.");

 //total the amount of bills, groceries, and otherExpenses
 var totalExpenses = parseFloat(bills) + parseFloat(groceries) + parseFloat(otherExpenses);

 console.log(totalExpenses);
 alert(userName+", you spend $"+totalExpenses+" every month.");

 //tell the user that we are now covering income amounts
 alert("Okay, "+userName+". Now it's time for us to talk about income.");

 //set up array for income values
 var incomeTypes = ["Hourly Pay", "Hours per week", "Other Income"];

 console.log(incomeTypes);

 //prompt user for hourly wage, hours per week, and extra income
 incomeTypes[0] = prompt("How much are you paid per hour at your job?");
 console.log(incomeTypes[0]);
 incomeTypes[1] = prompt("How many hours do you work every week?");
 console.log(incomeTypes[1]);
 incomeTypes[2] = prompt("If you have other income sources, how much do you make from those every month?");
 alert("You make $"+incomeTypes[2]+" from other sources.");
 console.log(incomeTypes[2]);

 alert("You work "+incomeTypes[1]+" hours per week. \nYou are paid $"+incomeTypes[0]+" per hour. \nYou earn $" + incomeTypes[2] + " additional income.");

 //set total income
 var totalIncome = (incomeTypes[0] * incomeTypes[1] * 52)/12 + incomeTypes[2];
 console.log(totalIncome);