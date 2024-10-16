let age= prompt("What is your age?")

if (age < 12 ){
    alert("You're a child!");
}
else if(age >= 12 && age< 18){
    alert("You're an adolescent!");
}

else if(age >= 18 && age< 50){
    alert("You're an adult!");
}

else if(age >=50){
    alert("You're old!");
}

else{
    alert("Please enter a valid age!");
}