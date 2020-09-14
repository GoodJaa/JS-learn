const workers = [
    {"name": "Mike", "salary":500},
    {"name": "Roman", "salary":1500},
    {"name": "John", "salary":1250},
    {"name": "Elena", "salary":950},
    {"name": "Eduard", "salary":2720},
    {"name": "Rick", "salary":3000},
    {"name": "Morty", "salary":20}
];

let goodWorkers = [];

function getWorthyWorkers(workers) {
    for (i = 0; i < workers.length; i++) {
        let worker = workers[i];
        if (worker.salary > 1000) {
            goodWorkers.push(worker.name);
        }
    }
    return goodWorkers.join(',');
}



console.log(getWorthyWorkers(workers));