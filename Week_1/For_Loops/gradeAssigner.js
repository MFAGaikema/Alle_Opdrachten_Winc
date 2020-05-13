const assignGrade = (num) => {
    if (num <= 65) {
        return "F";
    }   else if (num <=70) {
        return "D";
    }   else if (num <=80) {
        return "C";
    }   else if (num <=90) {
        return "B";
    }   else {
        return "A";
    }
}

console.log(assignGrade(45));

for(num=60; num<=100; num++) {
    if (num <= 65) {
        console.log("For " + num + ", you got an F.");
    }   else if (num <=70) {
        console.log("For " + num + ", you got a D.");
    }   else if (num <=80) {
        console.log("For " + num + ", you got a C.");
    }   else if (num <=90) {
        console.log("For " + num + ", you got a B.");
    }   else {
        console.log("For " + num + ", you got an A.");
    }
}
