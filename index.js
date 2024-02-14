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
const age = 18
const owncare = false
if(age<18 &&owncare){
    console.log("you can drive with your dad")
}else if(age<=18 &&  owncare){
    console.log("you can drive")
}else if(age>=18 && !owncare){
    console.log("buy own car or rent a car or ask your friend car")
}else {
    console.log("you can not drive because you are small and you dont have car")
}
// ======================================================================================================