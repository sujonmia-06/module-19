number = 15;

// for loop
console.log("Welcome to Multiplication Table")
function multiplicationTable(num){
    for (var i = 1; i <= 10; i += 1){
        var result = num * i;
        console.log(`${num} * ${i} = ${result}`);
    }
}

multiplicationTable(number);

// while loop
console.log("Welcome to Multiplication Table")
function multiplicationTable(num){
    var i = 1;
    while (i <= 10){
        var result = num * i;
        console.log(`${num} * ${i} = ${result}`);
        i += 1;
    }
}

multiplicationTable(number);