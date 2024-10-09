var age = prompt("Enter Your Age")

  if(age >= 18){
    alert("you are and Adult");
    
  }
  else if(age > 13 && age <18 ){
    alert("you are a teenager")
  }
  else{
    alert
    ("you are a child")
  }


  var weather = prompt("type weather \n Sunny \n Rainy \n Snowy")

  if(weather === "sunny"){
    alert("Wear sunglasses")
  }

  else if(weather === "rainy")(
    alert("Take an Umbrella")
  )

  else if(weather ==="snowy"){
    alert("Wear warm clothes")
  }
  else{
    alert("Enjoy your day")
  }

    var marks = prompt("Please assign your Marks")

    if(marks >=90){
        alert("Grade:A")
    } else if(marks>80 && marks <89 ){
        alert("Grade:B")
    }else if(marks>70 && marks< 79 ){
        alert("Grade:C")
    }else if(marks>60 &&  marks< 69){
        alert("Grade:D")
    }else{
        alert("Grade:F")
    }
var userName = prompt("Type Username or admin")

if (userName === "admin")
    console.log(password);
    
var password = prompt("Type password 1234")

if ( password === "1234")
{   alert("login Successful!")
}
else{
    alert("Try again")
}


var number = prompt("Number range checker")

if(number <= 10){
   alert("The number is  between 1 and 10")
} else if(number>11 && number<20){
     alert("the number is between 11 and 20")
}
else{
    alert("The number is out of range")
}