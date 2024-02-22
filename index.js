// for(i=1;i<=70;i++){
//     if(i%7 ==0){
//         console.log("seven divided",i)

//     }
// // else{
// //     console.log("Three digite",i)
// // }
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------
// two digite and three dihite number print in 99to 110

for(i=90;i<=110;i++){
    if(i<100){
        console.log("two digite",i)
    }
else{
    console.log("Three digite",i)
}
}
// -----------------------------------------------------------------------------------------------------------------------------------------
// single and double digite number print in 1 to 50
for(i=1;i<=50;i++){
    if(i<10){
        console.log("single digite",i)
    }
else{
    console.log("Double digite",i)
}
}
// --------------------------------------------------------------------------------------------------------------------------------------------
// print tha 50 numbers and after print tha 25 to 50 numbers
for (i=0;i<=50;i++){
    if(i>=25){
        console.log('greater than numbers are',i)
    }
    // else{
    //     console.log('lesser than number are ',i)
    // }
}


for(i=1;i<50; i++){
    
    if(i>25 ){
        console.log("print 25#",i)
//     }else
// {
//     console.log("print 50#" ,i)
 }
}

// -------------------------------------------------------------------------------------------------------------------------------------------
// print frist 5 nunbers and after 6 to 10 print tha numbers
for(i=1;i<10;i++){
    // console.log (i)
    if(i<5){
        console.log("print frist 5 numbers",i)
    }
    else{
        console.log("print after6 to 10",i)
    }
    // ---------------------------------------------------------------------------------------------------------
    for(i=1;i<=20;i++){
        console.log(i+"x"+"2"+"=",i*2)
    }
    // ------------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"3"+"="+i*3)
    }
    // -----------------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"4"+"="+i*4)
    }
    // -------------------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"5"+"="+i*5)
    }
    // -----------------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"5"+"="+i*5)
    }
    // -----------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"6"+"="+i*6)
    }
    // -----------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"7"+"="+i*7)
    }
    // ------------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"8"+"="+i*8)
    }
    // -------------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"9"+"="+i*9)
    }
    // --------------------------------------------------------------------------------------
    for(i=1;i<=10;i++){
        console.log(i+"x"+"10"+"="+i*10)
    }
    // --------------------------------------------------------------------------------------
//    ood even number 
   
   
    num=5

if(num%2 ==0){
    console.log("odd numbers#")
 }
 else{
    console.log("Even numbers#")
 }
//  -------------------------------------------------------------------------------------
// time conditon  qustion elseif
time = 12
if(time<=3 ){
    console.log("good afternone")
}else if (time<=7){
    console.log("good evening")
}else{
    console.log("good night")
}
// =========================================================================================
age = 23
if(age<=6 ){
    console.log("Go to Palvadi")
}else if (age<=15){
    console.log("Go to Metricluactin School")
}else if(age<=18){
    console.log(" Go to Higher Secondry Schcool")
}else if(age<=22){
    console.log("Go to College")
}else{
    console.log("Go to Work")
}

/*
6 - palvadi
15 - school
18 - hsc 11 12
22 - clg
23 - work
*/
// -------------------------------------------------------------------------------------------
const age = 18
const owncare = true
if(age>= 18 && owncare){
  console.log("kishor is old enough to drive and has is own car")
  
}else{
    console.log("kishor dose not drvie")
}
// --------------------------------------------------------------------------------------------

var  age = false
const owncar=false
if(age && owncar){
    console.log("you can drive tha car")
}else if(age&& !owncar){
    console.log("you can ask friend car")
}else if(!age && owncar){
    console.log("you can not drive car because you are under 18")
}
else{
    console.log("you can not drive car because you are under 18 and you dont have car ")
}
// age  - owner
// true - true => you can drive the car
// true - false=> you can ask friend car
// false -true => you can not drive car because you are under 18
// false - false => you can not drive car because you are under 18 and you dont have car
// ============================================================================================
//age owncare
//16  true     => you can drive with your dad
//18  true     => you can drive
//18  false    => buy own car or rent a car or ask your friend car
//16  false    => you can not drive because you are small and you dont have car
const age = 34
console.log(false<=18)
const owncare = true
if(age<18 &&owncare){
    console.log("you can drive with your dad")
}else if(age>=18&& owncare){
    console.log("you can drive")
}else if( age>=18 && !owncare){
    console.log("buy own car or rent a car or ask your friend car")
}else {
    console.log("you can not drive because you are small and you dont have car")
}
// ======================================================================================================
// 17-2-2024
// Write a C program to find maximum between two numbers.
const a =2
const b =5
if(a<b){
    console.log(a)
}else{
    console.log(b)
}
// =======================================================================================
// Write a C program to find maximum between three numbers.
const a =20
const b =50 
const c =10

if(a<b&&a<c){
    console.log(a)
}else if(b<a&&b<c){
    console.log(b)
}else{
    console.log(c)
// }======================================================================================
// Write a C program to check whether a number is negative, positive or zero.
const a =100


if(a>=0){
    console.log("passtive integer")
}else{
    console.log("nagative integer")
}
// ===============================================================================================
// Write a C program to check whether a number is divisible by 5 and 11 or not.
const a =5
// 5 only divisible by 5
// 11 only divisible by 11
// 55 divisible by both
// 110 divisible by both
// 220 divisible by both
// 3 not divisible by both 
 if(a%5 ==0&&a%11==0 ){
    console.log("55 divisible by both")
}else if(a%11 ==0){
    console.log("11 only divisible by 11")
}else if(a%5===0){
    console.log("5 only divisible by 5")
}else{
    console.log("3 not divisible by both ")
}
// ============================================================================================
// Write a C program to check whether a number is even or odd.
const a =10
if(a%2 ==0){
     console.log("EvenNumbers#",a)
     
}else{
    console.log("oddNumbers#",a)
}
// ===========================================================================
// Write a C program to check whether a year is leap year or not.
const year=
if ((year%4 ==0&&year %100 !=0)||(year%400 ==0)) {
    console.log("This is leap Year",year)
}else{
    console.log("This is Not leap Year",year)
}
// ===================================================================================
// Write a C program to check whether a character is alphabet or not.
const a= "n"
if(a.toUpperCase()!=a.toLowerCase()){
    console.log("This is alafabatic")
}else{
    console.log("This is not alafabatic")
}
// =========================================================================================================
const a= "b"
const letters = "abcdefghijklmnopqrstuvwxyz";
if(letters.includes (a)) {
   console.log("This is alafabatic")
}else{
   console.log("This is not alafabatic")
}
// =================================================================================
// Write a C program to input any alphabet and check whether it is vowel or consonant.
const alphabet= "a"
const letters =("aeiou")
if(letters.includes (alphabet)){
    console.log(" vowel")
}else{
     console.log(" consonant")
}
// ===================================================================================================================================================
// Write a C program to input any character and check whether it is alphabet, digit or special character.
const sum ="a"
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const captal="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const two = alphabet+captal
const digite = "1234567890"
// const simple = "!,@,#,$,%,^,*,&&,&,*,.,~,`,"
if(two.includes(sum)){
    console.log("This tha alphabet")
}else if(digite.includes(sum)){
    console.log("This tha digites")
}else{
    console.log("This tha simble")
}
// ====================================================================================================================================================

// Write a C program to check whether a character is uppercase or lowercase alphabet.
const sum ="A"
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const captal="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(alphabet.includes(sum)){
    console.log("This is tolowercase")
}
else if(captal.includes(sum)){
    console.log("This is uppercase")
}
// ==============================================================================================================================================
// Write a C program to input week number and print week day.yy
// Write a C program to input month number and print number of days in that month.
const dates =
const monthes ="1,3,5,7,8,10,12"
const monthes30 ="4,6,9,11"
const monthes29= "2"
if(monthes.includes(dates)){
    console.log("30 days this month")
}else if(monthes30.includes(dates)){
    console.log("31 days this month")
}else if(monthes29.includes(dates)){
    console.log("29 days this month")
}
    
   
// n 6 - 30 
// n 1 -31
// n 2 - 29
// n 7 - 31
// ---------------------------------------------------------------------------------------------------------------------------------------
// Write a C program to count total number of notes in given amount.
// Write a C program to input angles of a triangle and check whether triangle is valid or not.
const a= 70
const b= 60
const c= 50
const d= a+b+c
if(d==180){
    console.log("this is triangle")
}else{
    console.log("this is not triangle")
}
// Write a C program to input all sides of a triangle and check whether triangle is valid or not.
// Write a C program to check whether the triangle is equilateral, isosceles or scalene triangle.
const a= 60
const b= 60
const c= 60
const d= a+b+c
if((a==b  && b==c && c==a )){
    
    console.log("this is  equilateral triangle")
}else{
    console.log("this is isosceles or scalene triangle")
}

// Write a C program to find all roots of a quadratic equation.
// Write a C program to calculate profit or loss.
const a= 300 // actual price
const b= 500   //selling price
const c=b-a
if(a<b){
    
    console.log("profit")
    console.log(c)
}else{
    console.log("loss")
    console.log(c)
}

// Write a C program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// Write a C program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// Write a C program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
