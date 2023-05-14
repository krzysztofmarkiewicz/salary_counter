const header = document.querySelector('h1')
const numOfWorkingDays = document.querySelector('.num-of-working-days')
const month = document.querySelector('.month')
const hoursWorked = document.querySelector('.hours-worked')
const hourlyRateBrutto = document.querySelector('.hourly-rate-brutto')
const hourlyRateNetto = document.querySelector('.hourly-rate-netto')
const typeOfContract = document.querySelector('#type-of-contract')
const vacationDays = document.querySelector('.vacation-days')
const vacationDayValue = document.querySelector('.vacation-day-value')
const vacationSum = document.querySelector('.vacation-sum')
const sickLeaveDays = document.querySelector('.sick-leave-days')
const sickLeaveDayValue = document.querySelector('.sick-leave-day-value')
const baseSickLeaveDayValue = document.querySelector('#base-sick-leave-day-value')
const sickLeaveSum = document.querySelector('.sick-leave-sum')
const bonus = document.querySelector('.bonus')
const result = document.querySelector('.result')

const baseToPay = 2747
let daysInMonth

const getNumDaysOfMonth = () => {
    const monthValue = month.value
    const getYear = monthValue.substring(0, 4);
    const getMonth = monthValue.substring(5);
    const date = new Date(getYear, getMonth, 0);
    const numOfDays = date.getDate();

    daysInMonth = Number(numOfDays)
}
//set value of one sick leave day

const SetBaseSickLeaveDayVal = () => {
    getNumDaysOfMonth()
    let baseSickLeaveDayVal
    if (baseSickLeaveDayValue.checked === true) {
        baseSickLeaveDayVal = baseToPay / daysInMonth
    } else {
        baseSickLeaveDayVal = (baseToPay * .8) / daysInMonth
    }
    sickLeaveDayValue.innerHTML = Number(baseSickLeaveDayVal).toFixed(2)

}
//set value of one vacation day
const SetvacationDayValue = () => {
    vacationDayValue.innerHTML = (baseToPay / numOfWorkingDays.value).toFixed(2)
}


// let daysInMonth = getNumDaysOfMonth()

const setStart = () => {
    //set month
    month.value = localStorage.getItem('month')
    //set working days
    numOfWorkingDays.value = localStorage.getItem('workingDays')
    vacationDays.value = 0
    sickLeaveDays.value = 0
    SetvacationDayValue()
    SetBaseSickLeaveDayVal()
}
setStart()

const calculateValueOfDays = (numOfDays, ValueOfDay) => {
    return numOfDays * ValueOfDay
}

const calulateValueOfVacation = () => {
    vacationSum.innerHTML = calculateValueOfDays(Number(vacationDays.value), Number(vacationDayValue.innerText))

}
const calulateValueOfsickLeave = () => {
    sickLeaveSum.innerHTML = calculateValueOfDays(Number(sickLeaveDays.value), Number(sickLeaveDayValue.innerHTML)).toFixed(2)
}
const addMonthToCoockies = () => {
    localStorage.setItem('month', month.value)
    calculate()
}
const addNumOfWorkingDays = () => {
    localStorage.setItem('workingDays', numOfWorkingDays.value)
    getNumDaysOfMonth()
    calculate()

}

const setHourlyRateNetto = () => {
    if (typeOfContract.checked === true) {
        hourlyRateNetto.innerHTML = Number(hourlyRateBrutto.value) - 9
    } else {
        hourlyRateNetto.innerHTML = Number(hourlyRateBrutto.value) - 16
    }
}

const setResult = () => {
    header.innerHTML = Number(vacationSum.innerText) + Number(sickLeaveSum.innerText) + (hoursWorked.value * Number(hourlyRateNetto.innerHTML))+Number(bonus.value)
}

const calculate = () => {
    getNumDaysOfMonth()
    setHourlyRateNetto()
    setHourlyRateNetto()
    calulateValueOfsickLeave()
    // SetBaseSickLeaveDayVal()
    calulateValueOfVacation()
    SetvacationDayValue()
    setResult()
    console.log(daysInMonth);
}

//listeners
month.addEventListener('change', addMonthToCoockies)
numOfWorkingDays.addEventListener('change', addNumOfWorkingDays)
hoursWorked.addEventListener('keyup',calculate)
hourlyRateBrutto.addEventListener('keyup', calculate)
typeOfContract.addEventListener('change', calculate)
vacationDays.addEventListener('keyup', calculate)
sickLeaveDays.addEventListener('keyup', calculate)
baseSickLeaveDayValue.addEventListener('change', () => {
    SetBaseSickLeaveDayVal()
    calculate()
})
bonus.addEventListener('keyup', calculate)







const logi = () => {
    console.log(numOfWorkingDays.value);
    console.log(month.value);
    console.log(hoursWorked.value);
    console.log(hourlyRateBrutto.value);
    console.log(hourlyRateNetto.value);
    console.log(typeOfContract.checked);
    console.log(vacationDays.value);
    console.log(vacationDayValue.value);
    console.log(sickLeaveDays.value);
    console.log(sickLeaveDayValue.value);
    console.log(baseSickLeaveDayValue.checked);
    console.log(vacationSum.innerHTML);
    console.log(bonus.value);
}
// logi()