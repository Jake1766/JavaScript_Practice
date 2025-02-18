const leapYears = function(year) {
    var leapYearStatus = false;
    if(year%4 == 0 && year%100 != 0){
        leapYearStatus = true;
    }
    if(year%400 == 0){
        leapYearStatus = true;
    }
    console.log(leapYearStatus);
    return leapYearStatus

};

const year = 2000;
leapYears(1900)



// Do not edit below this line
module.exports = leapYears;
