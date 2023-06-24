const auditory = [
    {
        number: '209',
        seats: 20,
        faculty: 'Гірничо-металургійний факультет'
    },
    {
        number: '211',
        seats: 20,
        faculty: 'Гірничо-металургійний факультет'
    },
    {
        number: '220',
        seats: 15,
        faculty: 'Гірничо-металургійний факультет'
    },
    {
        number: '205',
        seats: 12,
        faculty: 'Гірничо-металургійний факультет'
    },
    {
        number: '105',
        seats: 18,
        faculty: 'Факультет економіки'
    },
    {
        number: '110',
        seats: 16,
        faculty: 'Факультет економіки'
    },
    {
        number: '108',
        seats: 13,
        faculty: 'Факультет економіки'
    },
    {
        number: '315',
        seats: 12,
        faculty: 'Будівельний факультет'
    },
    {
        number: '320',
        seats: 20,
        faculty: 'Будівельний факультет'
    },
    {
        number: '301',
        seats: 15,
        faculty: 'Будівельний факультет'
    },
    {
        number: '410',
        seats: 15,
        faculty: 'Електротехнічний факультет'
    },
    {
        number: '407',
        seats: 20,
        faculty: 'Електротехнічний факультет'
    },
    {
        number: '401',
        seats: 14,
        faculty: 'Електротехнічний факультет'
    },
    {
        number: '505',
        seats: 20,
        faculty: 'Факультет інформаційних технологій'
    },
    {
        number: '501',
        seats: 16,
        faculty: 'Факультет інформаційних технологій'
    },
    {
        number: '515',
        seats: 15,
        faculty: 'Факультет інформаційних технологій'
    },
];

// ********************************************

auditory.sort((a, b) => {
    if (a.seats > b.seats) {
        return 1;
    }
    if (a.seats < b.seats) {
        return -1;
    }
    return 0;
});


auditory.sort((a, b) => {
    if (a.faculty > b.faculty) {
        return 1;
    }
    if (a.faculty < b.faculty) {
        return -1;
    }
    return 0;
});
// ********************************************
const group = function (name, students, faculty) {
    return {
        name: name,
        students: students,
        faculty: faculty,
    }
};
// ********************************************
function displayAllAuditory() {

    const title = document.createElement('h2');
    const ul = document.createElement('ul');

    title.textContent = 'Список усіх аудиторій';

    auditory.forEach(item => {
        console.log(item);
        let li = document.createElement('li');
        li.innerHTML = `
            <p><b> Аудиторія №: ${item.number}</b></p>
            <p> Кількість місць: ${item.seats}</p>
            <p> ${item.faculty}</p>
            `
        ul.append(li);
    });


    document.body.appendChild(title);
    document.body.appendChild(ul)
};

// ********************************************

function displayAuditoryForFaculty(faculty) {

    const title = document.createElement('h2');
    const ul = document.createElement('ul');

    title.textContent = `Список аудиторій ${faculty}`;

    auditory.forEach(item => {
        if (item.faculty === faculty) {
            console.log(item);
            let li = document.createElement('li');
            li.innerHTML = `
                <p><b> Аудиторія №: ${item.number}</b></p>
                <p> Кількість місць: ${item.seats}</p>
                <p> ${item.faculty}</p>
                `
            ul.append(li);
        }

    });

    document.body.appendChild(title);
    document.body.appendChild(ul)
}

// ********************************************

function displayAuditoryForGroup(group) {

    const title = document.createElement('h2');
    const ul = document.createElement('ul');

    title.textContent = `Список аудиторій для ${group.name}`;

    auditory.forEach(item => {

        if (item.faculty === group.faculty && item.seats >= group.students) {

            let li = document.createElement('li');

            li.innerHTML = `
                <p><b> Аудиторія №: ${item.number}</b></p>
                <p> Кількість місць: ${item.seats}</p>
                <p> ${item.faculty}</p>
                `;

            ul.append(li);
        }

    });

    document.body.appendChild(title);
    document.body.appendChild(ul)
}

displayAuditoryForFaculty('Будівельний факультет');
// displayAuditoryForFaculty('Факультет інформаційних технологій');
// displayAllAuditory();
displayAuditoryForGroup(group('Web31', 15, 'Факультет інформаційних технологій'));
// displayAuditoryForGroup(group('ЗГР-19-1', 20, 'Гірничо-металургійний факультет'));
// displayAuditoryForGroup(group('Буд-1', 15, 'Будівельний факультет'));
// displayAuditoryForGroup(group('Ек-1', 15, 'Факультет економіки'));
