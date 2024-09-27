// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    const newDrivers = drivers.slice(0,2);
    return newDrivers;
}

const returnLastTwoDrivers = function(drivers){
    const freshDrivers = drivers.slice(2);
    return freshDrivers;
}
const selectingDrivers = function(drivers){
    const newDrivers = drivers.slice(0,2);
    const freshDrivers = drivers.slice(2);
    return [returnFirstTwoDrivers(drivers),returnLastTwoDrivers(drivers)];

}();

function createFareMultiplier(number){
    let fare = number;
    return function(fare){
        return fare * number;
    }
}

const fareDoubler = function(fare){
    return fare * number;
}