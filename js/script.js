//1 задание 
let numb = 9.9
let numbb = 4
let numbbb = 7.004
let numbbbb = -0.95
let numbbbbb = -4
let numbbbbbb = -7.004
console.log(Math.round(numb));
console.log(Math.round(numbb));
console.log(Math.round(numbbb));
console.log(Math.round(numbbbb));
console.log(Math.round(numbbbbb));
console.log(Math.round(numbbbbbb));

console.log(Math.ceil(numb));
console.log(Math.ceil(numbb));
console.log(Math.ceil(numbbb));
console.log(Math.ceil(numbbbb));
console.log(Math.ceil(numbbbbb));
console.log(Math.ceil(numbbbbbb));

console.log(Math.floor(numb));
console.log(Math.floor(numbb));
console.log(Math.floor(numbbb));
console.log(Math.floor(numbbbb));
console.log(Math.floor(numbbbbb));
console.log(Math.floor(numbbbbbb));
//2 задание
let ask = +prompt("напиши любое число") 
let nember = +prompt("в какую степень ты хочешь ее возвести ?") 
alert(ask**nember)
console.log(ask,nember);
//3 задание
let my_name = ['S,','A,','L,','A,','T,']
my_name = my_name.join('').replace(/,/gi, '')
console.log(my_name);
//4 задание
let mail = prompt("Введите свой mail")  
mail = mail.replace(/1/gi, '')
mail = mail.replace(/2/gi, '')
mail = mail.replace(/3/gi, '')
mail = mail.replace(/4/gi, '')
mail = mail.replace(/5/gi, '')
mail = mail.replace(/6/gi, '')
mail = mail.replace(/7/gi, '')
mail = mail.replace(/8/gi, '')
mail = mail.replace(/9/gi, '')
mail = mail.replace(/0/gi, '')
mail = mail.toUpperCase()
alert(mail) 
console.log(mail);

