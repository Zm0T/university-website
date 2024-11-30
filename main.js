// function newGame() {
//     function randomNumber(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     let numberR = randomNumber(1, 1000);
//     let num = 0;

//     function randPlay() {
//         let number = prompt("Введите число:");
//         num = parseInt(number);

//         if (num < numberR) {
//             alert("Больше!");
//             randPlay();
//         } else if (num > numberR) {
//             alert("Меньше!");
//             randPlay();
//         } else {
//             alert("Правильно!");
//             if (confirm("Сыграем еще раз?")) {
//                 newGame();
//             }
//         }
//     }

//     randPlay();
// }

// newGame();


// // Задание 1
// const name = "Александр";
// const age = 20;

// if (age >= 18) {
//     console.log("Вы совершеннолетний");
// } else {
//     console.log("Вы несовершеннолетний");
// }

// // Задание 2: Циклы
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let count = 10;
// while (count >= 1) {
//     console.log(count);
//     count--;
// }

// // Задание 3
// const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
// const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

// lectures.push('Тема 4');
// practices.unshift('Практика 0');

// console.log("Темы лекций:");
// lectures.forEach(lecture => console.log(lecture));

// console.log("Темы практик:");
// practices.forEach(practice => console.log(practice));

// function arrayToString(array) {
//     return array.join(', ');
// }

// console.log("Лекции:", arrayToString(lectures));
// console.log("Практики:", arrayToString(practices));

// // Задание 4
// lectures.push('Основы JavaScript', 'Основы HTML', 'Функции JS');

// function filter(a, b) {
//     return a.filter(a => a.startsWith(b));
// }

// const arrayFilter = filter(lectures, 'О');
// console.log("Темы, начинающиеся на 'О':", arrayFilter);


