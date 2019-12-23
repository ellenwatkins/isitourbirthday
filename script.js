var importantDates = {"12/22/2019": "Mitch McConnell's wedding anniversary to Elaine Chao<br>and<br>International Day of Zero Tolerance to Female Genital Mutilation"}

var currentdate = new Date(); 

console.log(currentdate)
var datetime = (currentdate.getMonth()+1)  + "/" + currentdate.getDate() 
                + "/" + currentdate.getFullYear()

var printOut

function checkDate(){
    if (datetime === "04/01/2020" || datetime === "04/02/2020"){
        return printOut = "YES!! IT'S REALLY OUR BIRTHDAY!!"
    }
    else if(importantDates[datetime].length > 0) {
        return printOut = "Nope! <br> But here's what you can celebrate: <br>" + "<div id='newText'>" + importantDates[datetime] + "</div>"
    }
}

let div = document.getElementById('result');

function toPage(){
    div.innerHTML += String(checkDate())
}

toPage();
//var element = document.getElementById('result');

//function print(s()){
//  element.write(String(checkDate()));
//}

//python3 -m http.server 8080