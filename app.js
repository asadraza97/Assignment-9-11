// Q1=================================

// var city = prompt("Enter your city name")
// if ( city === "karachi"){
//     console.log("Welcome to the city of light")
//     document.write("Welcome to the city of light")

// }

// =============Q2===========

// var gender = prompt("Enter your gender")
// if ( gender === "male"){
//     console.log("Good Morning Sir")
  
// }else if(gender === "female"){
//     console.log("Good Morning Maam")
// }

// =================Q3==================

// var color = prompt("Enter color for traffic signal")
// if( color === "red"){
//     console.log("Must Stop")
// }else if(color === "yellow"){
//     console.log("Ready to move")

// }else if(color === "green"){
//     console.log("Move Now")
// }else{
//     console.log("Warning")
// }

// ===================Q4 ==================

// let fuel = +prompt("Remaining fuel in a car(in litre).")
// if (fuel < 0.25){
//     document.write("Please refill the fuel in your car")

// }

// ====================Q5=====================

//  5a //

// var a = 4
// if(++a === 5){
//     alert("Given condition for variable a is true")
// }

// // 5b //

// var b = 82;
// if (b++ === 83){
//     alert("Given condition for variable b is true")
// }

// // 5c //

// var c = 12;
// if (c++ === 13){
//     alert("Condition 1 is true")
// }

// // 5d //

// var c = 12;
// if (c++ === 13){
//     alert("Condition 1 is true")
// }
// if(c === 13){
//     alert("Condition 2 is true")
// }
// if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }

//     // 5d //

//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if(totalCost === laborCost + materialCost){
//         alert("The cost equals");
//     }
//       // 5e //

//      if (true){
//         alert("True");
//         }
//         if (false){
//         alert("False");
//         }
        
//     // 5f //

//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }

        //// Q6 ////
//         document.write("<h3>Mark Sheet</h3>")

//     let totalMarks = +prompt("Total Marks")    
//     document.write("Total Marks :"+ totalMarks)
//     document.write("</br>")
//     let marksObtained = +prompt("Enter marks obtained in three subject")
//     document.write("Marks Obtained :" + marksObtained)
//     document.write("</br>")
//     let percentage = (marksObtained / totalMarks) * 100
//     document.write(" Percentage : " + percentage + "%" )
//     document.write("</br>")

//    if (percentage >= 80){
//     document.write("Grade: A-1")
//     document.write("</br>")
//     document.write("Remarks: Excellent")


//    }else  if(percentage >= 70){
//     document.write(" Grade: A")
//     document.write("</br>")
//     document.write("Remarks: Good")

//    }else  if(percentage >= 60){
//     document.write("Grade: B")
//     document.write("</br>")
//     document.write("Remarks: You need to improve")

//    }else if(percentage < 60 ){
//     document.write("Grade: Fail")
//     document.write("</br>")
//     document.write("Remarks: Sorry")

//    }
   

// ===========Q7 ===============//

// document.write("<h1> Guess Game </h1>")

// var secretNumber = 7
// var guessNumber = +prompt( "Guess the secret number is 1 to 10")

// if(guessNumber === secretNumber){
//     document.write('<h2>Bingo! Correct answer</h2>')
// }else if(++guessNumber === secretNumber){
//     document.write('<h2>Close enough to the correct answer</h2>')
// }else(
//     document.write('<h2>Wrong Answer</h2>')
    
// )


// ================Q8================= //

// document.write("<h1> Q8 </h1>")

// let numberInput = +prompt('Enter the number: ');
// if(numberInput % 3 === 0){
//         document.write('The number is divisible by 3')

// }else{
//         document.write('The number is not divisible by 3')
// }


// ================Q9================= //


// document.write("<h1> Q9 </h1>")

// let evenNumber = +prompt('Enter the number: ');
// if(evenNumber % 2 === 0){
//         document.write('Even Number')

// }else{
//         document.write('Odd Number')
// }


// ================Q10================= //

// document.write("<h1> Q10 </h1>")

// var temperature = +prompt('Enter the temperature')
// if(temperature > 40){
//         document.write('It is too hot outside')
// }else if(temperature > 30){
//         document.write('The Weather today is Normal')
// }else if(temperature > 20){
//         document.write('Today’s Weather is cool')
// }else if(temperature > 10){
//         document.write("OMG! Today’s weather is so Cool")
// }

// / ================Q11================= //

document.write("<h1> Q11 </h1>")

var number1 = +prompt('Enter the Number1')
var number2 = +prompt('Enter the Number2')
var operator = prompt('Enter the arthemitic Operator +, -, *, /, %')

if (operator === "+"){
        var results = number1 + number2
        document.write( 'Result : ' + results)
}else if(operator === "-"){
        results = number1 - number2
        document.write('Result : ' + results)
}else if(operator === "*"){
         results = number1 * number2
        document.write('Result : ' + results)
}else if(operator === "/"){
         results = number1 / number2
        document.write('Result : ' + results)
}else if(operator === "%"){
 results = number1 % number2
        document.write('Result : ' + results)
}