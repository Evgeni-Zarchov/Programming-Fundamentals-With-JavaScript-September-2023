function dayOfWeek(day) {

    if (day >= 1 && day <= 7) {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log(days[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(2);
dayOfWeek(6);
dayOfWeek(11);