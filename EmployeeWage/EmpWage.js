
/**
 * 
 * Repeat UC 7 of Employee Wage Problem to use Objects Helper Function and Arrow Functions to perform following operations
 * a. Calc total Wage
 * b. Show the Day along with Daily Wage using Map helper function
 * c. Show Days when Full time wage of 160
 * d. Find the first occurrence when Full Time Wage was earned
 * e. Check if Every Element of Full Time Wage is truly holding Full time wage
 * f. Check if there is any Part Time Wage 
 * g. Find the number of days the Employee Worked
 * 
 */
const fixed_rate = 20;
const full_time_hrs = 8;
const Part_Time_Fixed_hrs = 4;

let array = new Array();
let array1 = new Array();

function EmployeeWagecalculate(days,full_time_aray, part_time_array) {
    
    let absent = 0;
    let present = 0;
    let partTime = 0;
    for (let i = 1; i <= days; i++) {
        const number = Math.floor(Math.random() * 10 % 3);
        switch (number) {
            case 0:
                absent++;
                break;
            case 1:
                full_time_aray.push(i);
                present++;
                break;
            case 2:
                part_time_array.push(i);
                partTime++;
                break;
            default:
                break;
        }
    }

    let dailyWagecalculate = full_time_aray.map(function(element) {
        if ((element != null) == true) return 1 * fixed_rate * full_time_hrs;
    });
    let dailywagePartTimecal = part_time_array.map(function(element) {
        if ((element != null) == true) return 1 * fixed_rate * Part_Time_Fixed_hrs;
    });
    
    return [
        [full_time_aray, dailyWagecalculate, (full_time_hrs * fixed_rate * present)],
        [part_time_array, dailywagePartTimecal, (full_time_hrs * fixed_rate * partTime)]
    ];
}
console.log(EmployeeWagecalculate(10,array,array1));
