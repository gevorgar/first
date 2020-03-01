let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionatExpenses: {},
    income: [],
    saving: false
};
let question1 = prompt('Ведите обязательную статью расходов в этом месяце', '');
let question2 = prompt('Во сколько обойдется?','')
let question3 = prompt('Ведите обязательную статью расходов в этом месяце', '');
let question4 = prompt('Во сколько это обойдется?', '');

appData.expenses.question1 = question2;
appData.expenses.question3 = question4;
console.log(appData.budget)
alert(appData.budget / 30);