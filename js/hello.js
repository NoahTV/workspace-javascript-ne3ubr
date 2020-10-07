console.log("I am in the hello.js");

var today = new Date();
var hoursNow = today.getHours();

var greeting = ""
if (hoursNow <= 12)
{
  greeting = "Good Morning"
}
else 
{
  greeting = "Good Afternoon"
}

document.write(greeting);