/* Your Code Here */
function createEmployeeRecord(employeeArray) {
    const employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(array) {
    return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(date) {
    const dateStamp = date.split(' ');
    let timeInEvent = {
        type: 'TimeIn',
        date: dateStamp[0],
        hour: parseInt(dateStamp[1])
    };
    this.timeInEvents.push(timeInEvent);
    return this;
}

function createTimeOutEvent(date) {
    const dateStamp = date.split(' ');
    let timeOutEvent = {
        type: 'TimeOut',
        date: dateStamp[0],
        hour: parseInt(dateStamp[1])
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(timeIn => timeIn.date === date)
    const timeOut = this.timeOutEvents.find(timeOut => timeOut.date === date)
    //console.log(timeOut, timeIn)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour;
    return wage
   
}

function findEmployeeByFirstName(array, name) {
    return array.find(array => array.firstName === name)
}




/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
    return payable
}


function calculatePayroll(records) {
    let sum = 0
    records.forEach(record => {
        sum += allWagesFor.call(record)
    })
    return sum
}