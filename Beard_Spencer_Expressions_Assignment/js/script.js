 /*
Spencer Beard
SDI Section #1
Assignment: Expressions
9/6/2015
 */

 //welcome message and initial prompt
 alert("Hi. I am here to help you figure out how much \nextra money you have at the end of the month.");
 var userName = prompt("First, what's your name?");
 alert("Nice to meet you " + userName + ". Let's see if I can help you out.");

 console.log(userName);

 //prompt user for the amount of money they spend on monthly bills
 var bills = prompt("How much do you spend on monthly bills (rent/mortgage, utilities, insurance, etc.)?");
 bills = bills.replace("$", "");
 bills = bills.replace(",", "");

 console.log(bills);

 //show user what they entered for bills and prompt for food spending
 //alert("You spend $"+bills+" on monthly bills.");
 var groceries = prompt("You spend $" + bills + " on monthly bills. \nI'm sure you eat food, right? How much would you say you spend on food each month?");
 groceries = groceries.replace("$", "");
 groceries = groceries.replace(",", "");

 console.log(groceries);

 //show user what they entered for groceries and prompt for other expenses
 //alert("You spend $"+groceries+" on food every month.");
 var otherExpenses = prompt("You spend $" + groceries + " on food every month. \nIf there are any other regular expenses you have, total them up. How much do you" + " spend on other regular expenses?");
 otherExpenses = otherExpenses.replace("$", "");
 otherExpenses = otherExpenses.replace(",", "");

 console.log(otherExpenses);
 alert("You spend $"+otherExpenses+" on all other expenses.");

 //total the amount of bills, groceries, and otherExpenses
 var totalExpenses = parseFloat(bills) + parseFloat(groceries) + parseFloat(otherExpenses);

 console.log(totalExpenses);
 alert(userName+", you spend $" + parseFloat(totalExpenses).toFixed(2) + " every month.");

 //tell the user that we are now covering income amounts
 alert("Okay, "+userName+". Now it's time for us to talk about income.");

 //set up array for income values
 var incomeTypes = ["Hourly Pay", "Hours per week", "Other Income"];

 console.log(incomeTypes);

 //prompt user for hourly wage
 incomeTypes[0] = prompt("How much are you paid per hour at your job?");
 incomeTypes[0] = incomeTypes[0].replace("$", "");
 incomeTypes[0] = incomeTypes[0].replace(",", "");
 console.log(incomeTypes[0]);

 //prompt user for hours per week worked
 incomeTypes[1] = prompt("How many hours do you work every week?");
 incomeTypes[1] = incomeTypes[1].replace("$", "");
 incomeTypes[1] = incomeTypes[1].replace(",", "");
 console.log(incomeTypes[1]);

 //prompt user for other income amount
 incomeTypes[2] = prompt("If you have other income sources, how much do you make from those every month?");
 incomeTypes[2] = incomeTypes[2].replace("$", "");
 incomeTypes[2] = incomeTypes[2].replace(",", "");
 console.log(incomeTypes[2]);

 alert("You work "+incomeTypes[1]+" hours per week. \nYou are paid $"+incomeTypes[0]+" per hour. \nYou earn $" + incomeTypes[2] + " additional income.");

 //set total income
 var workIncome = incomeTypes[0] * incomeTypes[1] * 52;
 workIncome /= 12;
 console.log(parseFloat(workIncome).toFixed(2));
 var totalIncome = parseFloat(workIncome) + parseFloat(incomeTypes[2]);
 console.log(totalIncome);
 alert("You earn a total of $" + parseFloat(totalIncome).toFixed(2) +" every month.");

 //tell user how much money they have left over
 var extraMoney = totalIncome - totalExpenses;
 alert(userName + ", you earn a total of $" + parseFloat(totalIncome).toFixed(2) +" every month. \nYou spend $" + parseFloat(totalExpenses).toFixed(2) + " every month. \nYou have $" + parseFloat(extraMoney).toFixed(2) + " left over for the month. \nI hope this helps you.");

 /* test values */