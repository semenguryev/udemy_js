let money;
let time;

money = prompt('ваш бюджет на месяц?');
time = prompt('введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses:{"a1" : "a2"},
    optionalExpenses:{},
    income: {},
    savings: false,
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
    a2 = prompt('Во сколько обойдется?', '');
    a3 = prompt('Введите обязательную статью расходов в этом месяце', '');
    a4 = prompt('Во сколько обойдется?', '');

//console.log(appData.expenses);
alert(appData.budget / 30);