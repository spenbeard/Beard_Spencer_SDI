 /*
Spencer Beard
SDI Section #1
Assignment: Expressions
9/6/2015
 */

 //greeting message:
 alert("Hi. I am here to help you figure out how much \nextra money you have at the end of the month.");

 //prompt for user's name
 var userName = prompt("First, what's your name?");

 console.log("Nice to meet you, " + userName + ".");

 //prompt user for the amount of money they spend on monthly bills
 var bills = prompt("How much do you spend on monthly bills (rent/mortgage, utilities, insurance, etc.)?");

 //remove $ or commas from the string entered for bills, which would cause the string to parse incorrectly
 bills = bills.replace("$", "");
 bills = bills.replace(",", "");

 console.log("You spend $" + parseFloat(bills).toFixed(2) + " on monthly bills.");

 //restate to the user what they entered for bills and prompt user for the amount of money they spend on food
 var groceries = prompt("I'm sure you eat food, right? How much would you say you spend on food each month?");

 //remove $ or commas from the string entered for groceries, which would cause the string to parse incorrectly
 groceries = groceries.replace("$", "");
 groceries = groceries.replace(",", "");

 console.log("You spend $" + parseFloat(groceries).toFixed(2) + " on food every month.");

//restate to the user what they entered for groceries and prompt the user for the total amount of money spent on any other regular expenses
 var otherExpenses = prompt("If there are any other regular expenses you have, total them up. How much do you" + " spend on other regular expenses?");

 //remove $ and commas from the string entered for otherExpenses, which would cause the string to parse incorrectly
 otherExpenses = otherExpenses.replace("$", "");
 otherExpenses = otherExpenses.replace(",", "");

 console.log("You spend $" + parseFloat(otherExpenses).toFixed(2) + " on all other expenses.");

 //total the amount of bills, groceries, and otherExpenses
 var totalExpenses = parseFloat(bills) + parseFloat(groceries) + parseFloat(otherExpenses);

 console.log("You spend $" + parseFloat(totalExpenses).toFixed(2) + " every month.");

 //tell the user that we are now covering income amounts
 alert("Okay, "+userName+". Now it's time for us to talk about income.");

 //set up array for income values
 var incomeTypes = ["Your hourly pay", " how many hours per week per week you work", " and any other income you have."];

 console.log("To find out how much you make, we need to know 3 things: " + incomeTypes);

 //prompt user for hourly wage
 incomeTypes[0] = prompt("How much are you paid per hour at your job?");

 //remove $ and commas from the string entered for incomeTypes[0], which would cause the string to parse incorrectly
 incomeTypes[0] = incomeTypes[0].replace("$", "");
 incomeTypes[0] = incomeTypes[0].replace(",", "");

 console.log("You are paid $" + parseFloat(incomeTypes[0]).toFixed(2) + " per hour.");

 //prompt user for hours per week worked
 incomeTypes[1] = prompt("How many hours do you work every week?");

 //remove $ and commas from the string entered for incomeTypes[1], which would cause the string to parse incorrectly
 incomeTypes[1] = incomeTypes[1].replace("$", "");
 incomeTypes[1] = incomeTypes[1].replace(",", "");

 console.log("You work " + incomeTypes[1] + " hours per week.");

 //prompt user for other income amount
 incomeTypes[2] = prompt("If you have other income sources, how much do you make from those every month?");

 //remove $ and commas from the string entered for incomeTypes[2], which would cause the string to parse incorrectly
 incomeTypes[2] = incomeTypes[2].replace("$", "");
 incomeTypes[2] = incomeTypes[2].replace(",", "");

 console.log("You earn $" + parseFloat(incomeTypes[2]).toFixed(2) + " from all other sources.");

 //determine yearly salary
 var workIncome = incomeTypes[0] * incomeTypes[1] * 52;

 //determine average monthly salary
 workIncome /= 12;

 console.log("You make $" + parseFloat(workIncome).toFixed(2) + " per month at your job.");

 //determine total income by adding workIncome to incomeTypes
 var totalIncome = parseFloat(workIncome) + parseFloat(incomeTypes[2]);
 console.log("You earn $" + parseFloat(totalIncome).toFixed(2) + " every month.");

 //determine how much money the user has left over after subtracting expenses from income
 var extraMoney = totalIncome - totalExpenses;

 console.log("After you pay for all of your expenses, you will have $" + parseFloat(extraMoney).toFixed(2) + " left over. I hope this helps.");

 /* test values

  Nice to meet you, Spencer.
  You spend $1200.00 on monthly bills.
  You spend $300.00 on food every month.
  You spend $200.00 on all other expenses.
  You spend $1700.00 every month.
  To find out how much you make, we need to know 3 things: Your hourly pay,how many hours per week per week you work,and any other income you have.
  You are paid $13.00 per hour.
  You work 40 hours per week.
  You earn $0.00 from all other sources.
  You make $2253.33 per month at your job.
  You earn $2253.33 every month.
  After you pay for all of your expenses, you will have $553.33 left over. I hope this helps.

  Nice to meet you, Alexander.
  You spend $1500.00 on monthly bills.
  You spend $500.00 on food every month.
  You spend $500.00 on all other expenses.
  You spend $2500.00 every month.
  To find out how much you make, we need to know 3 things: Your hourly pay,how many hours per week per week you work,and any other income you have.
  You are paid $10.00 per hour.
  You work 50 hours per week.
  You earn $0.00 from all other sources.
  You make $2166.67 per month at your job.
  You earn $2166.67 every month.
  After you pay for all of your expenses, you will have $-333.33 left over. I hope this helps.

  Nice to meet you, Mr. Beard.
  You spend $1750.00 on monthly bills.
  You spend $600.00 on food every month.
  You spend $1000.00 on all other expenses.
  You spend $3350.00 every month.
  To find out how much you make, we need to know 3 things: Your hourly pay,how many hours per week per week you work,and any other income you have.
  You are paid $75.00 per hour.
  You work 40 hours per week.
  You earn $1500.00 from all other sources.
  You make $13000.00 per month at your job.
  You earn $14500.00 every month.
  After you pay for all of your expenses, you will have $11150.00 left over. I hope this helps.

  */