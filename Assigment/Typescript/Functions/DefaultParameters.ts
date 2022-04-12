// dis variable have a default value = 10
function couponCodeApply(cost, dis = 0.2) {
    return cost * (1 - dis);
}

console.log(couponCodeApply(100)); // 80


// When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.
function findDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

// Year 2019
let day = findDay(2019, 2);
console.log("Leap Year: "+day); // 28

//Year value taken by default as current year.
let day2 = findDay(undefined, 2);
console.log("Current Year: "+day);