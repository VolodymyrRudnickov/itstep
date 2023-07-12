class Employee { 
    constructor(fName,sName,age) {
        this.name = fName;
        this.sName = sName;
        this.age = age;
    }
}

const bank = [
    new Employee('Oleg','Ivanov',25),
    new Employee('Olga','Romanova',30),
    new Employee('Ivan', 'Petrov',20),
    new Employee('Petro', 'Ivanov',40),
    new Employee('Anna', 'Borysova',27),
    new Employee('Volodymyr', 'Rudnickov',27),
];

class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }
    getHmtl() { 
       const table  = document.createElement('table');
       table.classList.add('table');
       table.classList.add('table-primary');

        const head = document.createElement('thead');
        table.append(head);
        head.classList.add('table-secondary');
        const rowHead = document.createElement('tr');
        rowHead.innerHTML = `
        <th>Фамилия</th>
        <th>Имя</th>
        <th>Возраст</th>
        `;
        head.append(rowHead);

        const tbody = document.createElement('tbody');
        table.append(tbody);
        
        this.arr.forEach(employee => {
           const tr = document.createElement('tr');
           tr.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.sName}</td>
            <td>${employee.age}</td>
           `;
           tbody.append(tr)
       });

    document.body.append(table);
    return table;
    }
}
const table1 = new EmpTable(bank);
table1.getHmtl();

class StyledEmpTable extends EmpTable {
    constructor(arr,styles) {
        super(arr,styles)
        this.styles = styles;
    }
    getStyles() {
        let str = '';
        for(let key in this.styles) {
            str+= `${key}:${this.styles[key]}; `
        }
        return str;
    }
    getHmtl() {
        const table =  super.getHmtl();
        table.style = this.getStyles();
    }
}
const st = {
    color:'red',
    padding:'10px',
    'font-size':'20px',
}
const styledTable = new StyledEmpTable(bank,st);
console.log(styledTable.getStyles());
styledTable.getHmtl();


