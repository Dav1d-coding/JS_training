function prom1() {
    let name = prompt("Ваше имя:");
    alert(`Ваше имя ${name}`);
}

function prom2() {
    let name = prompt("Введите число:");
    alert(`Квадрат: ${name**2}`);
}

function prom3() {
    let name = prompt("Первое число:");
    let name2 = prompt("Второе число:");
    alert(`Сумма: ${+name + +name2}`);
}

function if1()
{
    let num = prompt("Введите число:");
    if (num > 0){
        alert(1);
    }else if(num == 0){
        alert(0);
    }else{
        alert(-1);
    }
}

function if2(a, b)
{
    let num = (a + b) < 4 ? 'Мало' : 'Много';
    alert(num);
}

function if3(login){
    let message = (login == "Сотрудник") ? "Привет" :
            (login == "Директор") ? "Здравствуйте" :
            (login == '') ? "Нет логина" : "";
    alert(message);
}

function sw1(browser){
    if (browser == 'Edge'){
        alert("You ve god the edge!");
    }else if(browser == 'Opera' || browser == 'Safari' || browser == 'Firefox' || browser == 'Chrome'){
        alert('We support it too');
    }else{
        alert('default');
    }
}

function sw2(num){
    switch(num){
        case 0:   
            alert('Вы ввели 0');
            break;
        case 1: 
            alert('Вы ввели 1');
            break;
        case 2:
            alert('Вы ввели 2 а мб и 3');
            break;
        case 3:
            alert('Вы ввели 2 а мб и 3');
            break;
        default:
            alert('Что то ввели!');
    }
}

function cyc1(){
    let start = prompt('Нижняя граница');
    let finish = prompt('Верхняя граница');
    for (start; start <= finish; start++)
    {
        let message;
        if (start % 2 == 0)
        {
            message = 'Четное'
            console.log(start, `- ${message}`)
        }else{
            message = 'Не четное'
            console.log(start, `- ${message}`)
        }
    }
}

function cyc2()
{
    let i = 1;
    while (1 > 0)
    {
        if (i * i * i >= 777777)
        {
            alert(i - 1);
            break;
        }
        i++;
    }
}

function cyc3()
{
    let num = prompt("Введите число");
    let sum = 0;
    while(Number(num) > 0)
    {
        if (Number(num) % 10 % 2 == 0){
            sum += Number(num) % 10;
        }
        num = Math.floor(num / 10);
    }
    alert(sum);
}