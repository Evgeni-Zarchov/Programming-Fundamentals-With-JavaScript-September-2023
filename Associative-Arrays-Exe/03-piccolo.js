function parking(arr) {
    let parkList = new Set();

    for (let item of arr) {
        let [direction, carNumber] = item.split(', ');

        if (direction === 'IN') {
            parkList.add(carNumber);
        } else if (direction === 'OUT') {
            parkList.delete(carNumber);
        }
    }
    if (parkList === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sorted = Array.from(parkList).sort((a, b) => a.localeCompare(b));

        sorted.forEach(carNumber => console.log(carNumber));
    }
}
parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);