
//helper prompt for testing
var testing = prompt("Would you like to know the winning numbers before you choose? yes or no (for testing purposes)");
var randomLucky = (Math.random()*17+1);
randomLucky = parseInt(randomLucky);

//Random winning numbers
const WINNING_LEN = 5;
var winning = [];
for (var i = 0; i<WINNING_LEN; i++) {
	winning.push(Math.random()*47+1);
	winning[i] = parseInt(winning[i]);
}
winning.sort(function(a, b){return a-b});


if (testing == "yes"){
	alert(winning + "+ lucky ball: " + randomLucky);
}

var numbers = prompt("Pick your 5 numbers between 1-48! Good Luck and remember to separate your numbers with a space: ").split(" ");

var lucky = prompt("Pick your 'Lucky Ball' number! Must be between 1-18");
lucky = parseFloat(lucky);


//printing winning numbers
document.write("The winning numbers");
for (var i = 0; i < WINNING_LEN; i++) {
	document.write(", "+ winning[i]);
}
document.write("<br>");
document.write(" + the Lucky Ball Number: " + randomLucky);
document.write("<br>");

//sorting and printing chosen numbers
numbers.sort(function(a, b){return a-b});
document.write("<br>" + "Your chosen numbers");
for (var i = 0; i < numbers.length; i++) {
	numbers[i] = parseFloat(numbers[i]);
	document.write(", " + numbers[i] );
}
document.write("<br>");
document.write(" + your chosen Lucky Ball Number: " + lucky);
document.write("<br>");


//FIND MATCHES
var matches = 0;
matches = parseInt(matches);
for (var i = 0; i < numbers.length; i++) {
	for (var j = 0; j<WINNING_LEN; j++) {
		if (numbers[i] == winning[j]) {
			matches++;
		}
	}
}
//Comparing Lucky Numbers
var goodLuck = false;
if(lucky == randomLucky) {
	goodLuck = true;
}
//printing found matches
document.write("<br>");
document.write("You matched " + matches + " out of 5 numbers.");
document.write("<br>");

if (goodLuck) {
	document.write("You matched your lucky ball!");
	document.write("<br>");
}

if (matches == 0) {
	if(goodLuck){
		document.write("You won $4!")
	} else {
		document.write("Better Luck Next Time!")
	}
}

if (matches == 1) {
	if(goodLuck){
		document.write("You won $6!")
	} else {
		document.write("Better Luck Next Time!")
	}
}

if (matches == 2) {
	if(goodLuck){
		document.write("You won $25!")
	} else {
		document.write("You won $3")
	}
}

if (matches == 3) {
	if(goodLuck){
		document.write("You won $150!")
	} else {
		document.write("You won $20")
	}
}

if (matches == 4) {
	if(goodLuck){
		document.write("You won $5,000!")
	} else {
		document.write("You won $200")
	}
}

if (matches == 5) {
	if(goodLuck){
		document.write("You won $7,000 a WEEK for LIFE!")
	} else {
		document.write("You won $25,000 a YEAR for LIFE!")
	}
}

