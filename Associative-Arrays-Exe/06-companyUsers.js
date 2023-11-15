function companyUsers(arr) {
    let companyLists = {};

    for (let info of arr) {
        let [company, userID] = info.split(' -> ');

        if (company in companyLists) {
            if (!companyLists[company].includes(userID)) {
                companyLists[company].push(userID);
            }
        } else {
            companyLists[company] = [userID];
        }
    }

    let entries = Object.entries(companyLists).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employeeId] of entries) {
        console.log(company);
        employeeId.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);