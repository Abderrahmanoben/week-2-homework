/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

function greetDaniel(danielsRole) {
  if ( danielsRole === "mentor") {
    return "Hi, I'm Daniel, I'm a mentor."
  } else if ( danielsRole === "student") {
    return "Hi, I'm Daniel, I'm a student."
  } else {
    return "Daniel who?"
  }
}

console.log(greetDaniel(danielsRole))


/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
