const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}



//1. Создайте поверхностную копию объекта user
let copyUser = { ...user };



//Проверка:
// console.log(user===copyUser)- что должно быть в консоли? // true
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?// true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = { ...user, friends: [...user.friends] }

//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?// false
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?//true

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(students === copyStudents)
console.log(students[0].name === copyStudents[0].name)
console.log(students[1].age === copyStudents[1].age)
console.log(students[2].isMarried === copyStudents[2].isMarried)

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({ ...el }))

//Проверка:
console.log(deepCopyStudents === copyStudents)
console.log(deepCopyStudents[0].name === copyStudents[0].name)
console.log(deepCopyStudents[1].age === copyStudents[1].age)
console.log(deepCopyStudents[2].isMarried === copyStudents[2].isMarried)

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
const sortABC = (a, b) => {
    if (a.name > b.name) {
        return 1
    }
    if (a.name < b.name) {
        return -1
    }
    return 0;
}
let sortedByName = deepCopyStudents.sort(sortABC)
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
const sort123 = (a, b) => {
    if (a.scores < b.scores) {
        return 1
    }
    if (a.scores > b.scores) {
        return -1
    }
    return 0;
}

let sortedByScores = deepCopyStudents.sort(sort123)
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(el => el.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = sortedByScores.splice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents)
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(el => !el.isMarried)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(el => el.name ? el.name : "")
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(" ")
console.log(namesWithSpace)
let namesWithComma = studentsNames.join()
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(el => el ? { ...el, isStudent: true } : el)
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(el => el.name === "Nick" ? { ...el, isMarried: true } : el)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find) 

let ann = newDeepCopyStudents.find(el=>el.name==="Ann")
console.log(ann)
// или
let ann1 = ""
const findAnn1 = (el, index, ar) => {
    if (el.name === "Ann") {
        ann1 = (ar[index].name)
        return ann1
    }
}
newDeepCopyStudents.find(findAnn1)
console.log(ann1)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*


let bestStudent = newDeepCopyStudents.reduce(function (a, b) { return a > b.scores ? a = b : a })
console.log(bestStudent)
//
const Bubble = (n) => {
    let big = n[0].scores
    for (j = 0; j < n.length - 1; j++) {

        if (n[j + 1] > big) {
            big = n[j + 1]
        }
    }
    return big
}

let bestStudent1 = Bubble(newDeepCopyStudents)
console.log(bestStudent1)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = newDeepCopyStudents.reduce(function (a, b) { return a + b.scores }, 0)
console.log(scoresSum)



// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {

    for (i = 0; i < students.length; i++) {
        let stud = students.filter((el, index) => index !== i)
        let studentsNames = stud.map(el => el.name ? el.name : "")
        students = students.map((el, index) => index === i ? { ...el, friends: [...studentsNames] } : el)
    }
    return students
}
console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]







