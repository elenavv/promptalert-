


/*6 Пользователь вводит значения a и b дляформулы a x b
а программа считает и выводит значение x.*/
let a = parseInt(prompt("Введите a: "));
let b = parseInt(prompt("Введите b: ")); 
let result5 = a * b; 
alert("a * b = " + result5)



/*5. Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами. */
let number_6 = parseInt(prompt("Введите число: "));
let number_7 = parseInt(prompt("Введите число: ")); 
let result4 = number_6 + number_7; 
alert("Сумма = " + result4)













prompt();
/*str1 - строковая переменная будет в себе хранить то что введет 
пользователь. prompt - ф-ция ввода данных   
"Введите строку: " - параметры ф-ции то что пользователь увидит перед вводом данных */
str1 = prompt("Введите строку: ");
/*number6 - числовая переменная будет в себе хранить то что введет 
пользователь. parseInt() - ф-ция, которая превращает введенную строку
в число чтобы 1+1=2, а не 1+1=11*/
number6 = parseInt(prompt("Введите число: ")); 

alert(); /*функция которая создает диалоговое окно с кнопкой Ок*/
alert("Hello World");/*alert -  название ф-ции () - то, что в скобках
это параметры */ 
alert(5); // аlert выводит цифры текст нужен чтобы вывести информацию
//alert выводит и строки и цифры одновременно 
alert("GitHub" + 1 + ".com");// + - оператор сложения строк 
// " '' " - принцип матрешки 
number5 = 5;
alert(number5);//вывод значения переменной 


/*
4.Реализуйте конвертор из километров в мили (пользователь вводит килллометры). Это значение укажите в коде как константу.
 1km - 0.62 milly */
/*Переменная - именнованная ячейка памяти, которая хранит в себе значение*/
const m = 0.62;/*Создали переменную константу храним в ней кол-во миль*/ 
let km = parseInt(prompt("Введите кол-во киллометров: ")); 
result3 = km*m; 
alert(result3)