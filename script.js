// console.log("Hello from Script.js")

// const num = 123;
// console.log(num);

// let a = 5;
// console.log(a = 7);

// let b = 0;
// console.log(b = 1 + 2 + 3);
// const c = 0;
// // c = 1 + 2 + 3;
// // console.log(c);

// console.log("комменты одного вида,", 'комменты другого вида')

// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

// let temperature = 32;
// console.log(`Температура в Цельсиях: ${temperature}`);
// console.log(`Температура в Фаингейтах: ${(9 / 5) * temperature + 32}`)

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

// const name = "Svyatoslav";
// let admin = name;
// console.log(admin)

// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3
// const num1 = prompt("Введи первое число");
// if (num1 <= 1){
//     alert("Равна или меньше")
// }
// else{
//     alert("Беда")
// }
// const num2 = prompt("Введи второе число");
// if (num2 >= 3){
//     alert("Norm")
// }
// else{
//     alert("NEnorm")
// }

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// let test = true;
// test === true ? console.log("+++") : console.log("---")

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = prompt("");
// if (day >= 1 && day < 10) {
//     alert (`${day} - первая декада`)
// }
// else if (day >= 10 && day < 20) {
//     alert (`${day} - вторая декада`)
// }
// else if (day >= 20 && day <= 31) {
//     alert (`${day} - третья декада`)
// }

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

// let num = prompt('Введите число');
// let count = 0;
// const array = [];
// while (count < 4){
//     array.push(num%10);
//     num = Math.floor(num/10);
//     count++;
// }
// alert(`${array[2]} сотен, ${array[1]} десятков, ${array[0]} единиц`)

// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function numToThree() {
    const number = prompt("Введите число для возведения его в степень 3")
    return alert(number ** 3 + 3 ** 3);
}


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function salaryWithoutTax() {
    let salary = Number(prompt("Введите свою зарплату"));
    if (!isNaN(salary)) {
        alert(`Ваша зарплата с учётом налога ${salary * 0.87}`)
    }
    else {
        alert("Пошёл вон!");
    }
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function maxAmongThree() {
    let array = [];
    const firstNum = array.push(+prompt("Введите,пожалуйста, певрое число, умоляю вас!!!"));
    const secondNum = array.push(+prompt("Введите,пожалуйста, второе число, умоляю вас!!!"));
    const thirdNum = array.push(+prompt("Введите,пожалуйста, третье число, умоляю вас!!!"));
    let max = -Infinity;
    for (let count = 0; count < array.length; count++) {
        if (max <= array[count]) {
            max = array[count];
        }
    }
    alert(max);
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function allFunc() {
    const num1 = Number(prompt());
    const num2 = Number(prompt());
    function sum(num1, num2) {
        alert(num1 + num2);
    }
    function dif(num1, num2) {
        alert(num1 - num2);
    }
    function mult(num1, num2) {
        alert(num1 * num2);
    }
    function div(num1, num2) {
        alert(num1 / num2);
    }
    sum(num1, num2);
    dif(num1, num2);
    mult(num1, num2);
    div(num1, num2);
}

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function definer() {
    for (let i = 0; i < 11; i++) {
        if (i === 0) {
            console.log(`${i} - это ноль`);
        }
        else if (i % 2 === 0) {
            console.log(`${i} - чётное число`);
        }
        else {
            console.log(`${i} - нечетное число`);
        }
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

function sliceOfArray() {
    const array = [1, 2, 3, 4, 5, 6, 7];
    alert(`Исходны массив: ${array}`);
    array.splice(3, 2);
    alert(`Преобразованный массив: ${array}`);
}

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function generateRandomArray() {
    const length = 5;
    const randomArray = [];
    let sum = 0;
    let min = +Infinity;
    let count = 0;
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * 10); // Генерируем случайное число от 0 до 9
        sum += randomNum;
        if (randomNum <= min) {
            min = randomNum;
        }
        if (randomNum === 3) {
            count++;
        }
        randomArray.push(randomNum); // Добавляем число в массив
    }
    console.log(`Массив ${randomArray}`);
    console.log(`Минимальное число: ${min}`);
    console.log(`Сумма чисел: ${sum}`);
    console.log(`Всего ${count} шт. троек`);
}

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function outputMoiuntain() {
    for (let i = 1; i <= 20; i++) {
        console.log("x".repeat(i));
    }
}

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

function allMoreThreeInObject() {
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    }
    for (const keys in numbers) {
        if (numbers[keys] >= 3) {
            console.log(keys);
        }
        else {
            continue;
        }
    }
}



// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

function printerOfLines() {
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes); // Выводит: 2
    console.log(post.comments[1].userId); // Выводит: 5
    console.log(post.comments[1].text);
}

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

function minusFiveteenProcent() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products.forEach(product => {
        product.price = product.price * 0.85;
    });
    console.log(products);
}


// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

function filterAndSort() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg",
            ],
        },
        {
            id: 8,
            price: 78,
        },
    ];

    const arrayPhoto = [];
    arrayPhoto.push(products.filter(item => item.photos && item.photos.length > 0))
    console.log(arrayPhoto);

    // Копируем исходный массив
    const sortedProducts = products.slice();

    // Функция сравнения для метода sort
    const comparePrices = (productA, productB) => {
        return productA.price - productB.price;
    };

    // Сортировка копии массива sortedProducts по цене
    sortedProducts.sort(comparePrices);

    // Вывод отсортированного массива в консоль
    console.log(sortedProducts);

}


// **Задание 5**
// Дано 2 массива
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

function mapToObject() {
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

    const daysMap = {};

    for (let i = 0; i < en.length; i++) {
        daysMap[en[i]] = ru[i];
    }

    console.log(daysMap);
}




// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const getEl = document.getElementById("super_link");
console.log(getEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLinkAll = document.querySelectorAll(".card-link");
cardLinkAll.forEach((item) => {
    // item.textContent = "Ссылка"
})

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const getLinkInBody = document.querySelectorAll('.card-body .card-link');
getLinkInBody.forEach((item) => {
    console.log(item);
})


// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const findNumberFifty = document.querySelector('[data-number="50"]');
console.log(findNumberFifty);

// 5. Выведите содержимое тега title в консоль.

const pageTitle = document.title;
console.log(pageTitle);
// Другой способ
const titleElement = document.querySelector('title');
const pageTitlee = titleElement.textContent;
console.log(pageTitlee);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const getCardTitle = document.querySelector('.card-title');
console.log(getCardTitle.parentElement);

// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const createP = document.createElement('p');
createP.textContent = 'Привет';
const getCard = document.querySelector('.card');
getCard.prepend(createP);

// 8. Удалите тег h6 на странице.

const getHSix = document.querySelector('h6');
getHSix.remove();