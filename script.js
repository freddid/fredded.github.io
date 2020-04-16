let money,
    time;
 

let appData = {
    budget: money,
    expences: {},
    optionalExpences: {},
    income:[],
    timeData: time,
    saveing: false,
    cred: function () {
        money = prompt("Ваша зарплата на месяц" , "");
        time = prompt("Дата получения" , "");
        while (isNaN(money) || money == "" || money == null ){
            money = prompt("Ваша зарплата на месяц" , "");
        }
    },
    ded: function (){
        for (let i = 1; i > 0; i++) {
            let depozit= +prompt("ваш депозит" , "") ,
                parcent= +prompt("процент" , "");
            
            if ( (typeof(depozit))==="number" && (typeof(depozit)) !=null && 
             (typeof(parcent)) !=null && depozit != "" && parcent != "")
            {
                let a= depozit/100/12* parcent;
                alert("ваш доход " + a);
                break;
    
            }else {
                i++;
            }
        }
    },
    chooseIncome: function (){
        let arr = prompt("что принечет дополнительныйдоход" , ""),
            port= prompt("что то еще?" , "");
        while(isNaN(arr, port) || arr, port == null || arr, port == "" ){
            arr = prompt("что принечет дополнительныйдоход" , "");
            port= prompt("что то еще?" , "");
        } 
        appData.income= arr.split(", ");
        appData.income.push(port);
        appData.income.sort();
    }
};

for (let i = 1; i > 0; ) {
    let a = prompt("Введите обязательную статью расходов на месяц" , ""),
        b = prompt("Во сколько обойдется?" , "");
    
    if ( (typeof(a))==="string" && (typeof(a)) !=null && (typeof(b)) !=null && 
     a != "" && b != "" && a.length < 50 )
    {
            console.log("done");
            appData.expences[a] = b;
            break;
    }else{
        i++;
    }
}

appData.moneyPerDay =appData.budget / 30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay);
if ( appData.moneyPerDay < 200 ) {
    console.log(" вы нищий");
}else if (  appData.moneyPerDay > 200 || appData.moneyPerDay < 1000 ){
    console.log(" вы достаточно обесечены");
}else if (appData.moneyPerDay > 1000) {
    console.log(" вы богаты");
}else {
    console.log("ошибка");
}

