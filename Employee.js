//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

export function employee() {
    try{
        let employeeJson = JSON.stringify(employee);
        return employeeJson;
        
    } catch (error){
        return error;
    }
}

export function employeeTotalSalary() {
    try {
        let totalsalary = 0
        for (let index = 0; index < employees.length; index++) {
            totalsalary = totalsalary + employees[index].Salary;
        }
        return JSON.stringify({"totalsalary": totalsalary});
        
    } catch (error) {
        return error;
    }

}

export function employeeNames() {
    try {
        let employeenamesArr = [];
        for (let index = 0; index < employees.length; index++) {
            employeenamesArr.push(employees[index].firstName + ' ' + employees[index].lastName);
            
        }
        employees.sort(function(a,b){
            if (a>b)return 1;
            if (a<b)retun -1;
            return 0;
        })
        return JSON.stringify(employeenamesArr);
        
    } catch (error) {
        return error;
    }
}