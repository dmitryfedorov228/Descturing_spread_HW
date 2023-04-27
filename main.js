//? homeWork

// ! Task1.1 
 
// const obj = { 
//     name: 'Dima', 
//     age: 16, 
//     city: 'Bishkek' 
// } 
 
// const {name: personName, age: personAge, city :personCity} = obj
// console.log(personName ,personAge); 
 
 
 
// ! Task1.2 -------------------------- 
 
// let arr = [ obj1 = {name: 'Dima', age: 16}, obj2 = {name: 'Aidar', age: 20}] 
 
// const {name, age} = obj1
// const {name :firstName, age : firstAge} = obj1
// console.log({firstAge});
 
 
// ! Task1.3 -------------------------- 
 
    // let obj = { 
    //      nums: [1, 2, 3, 4, 5] 
    // } 
 
    // let [elem1, elem2] = obj.nums
    // let [firstNum, secondNum] = [elem1, elem2] 
    // console.log(secondNum); 
 
 
//  ! Task1.4 -------------------------- 
//     let person = { 
//         name: 'Ylyk',  
//         age: 21, 
 
//     } 
//     const {name} = person 
//     const newPerson = {name} 
//     console.log(newPerson); 
 
 
//  ! Task1.5 -------------------------- 
 
//  obj = { 
//     name: 'Aidar', 
//     age: 20, 
//     city: 'Singapur', 
//     show: () => { 
//         console.log(obj.name, obj.age, obj.city); 
//     } 
//  } 
 
// let {show} = obj 
// show()


//? -----------------------------------------------------------------------------------------------------------------------------------


//!task2.1


// Numbers1 = [1,2,3]
// const [elem1, elem2, elem3] = Numbers1
// Numbers2 = [4,5,6] 
// const allnumber = [elem1,elem2, elem3, ...Numbers2]
// console.log({allnumber});

//! task2.2 -------------------------- 

// let person1 = {
//     name: 'Aidar', 
//     age: 20
// }

// let person2 = {
//     city: 'Dubai', 
//     gender: 'Male'
// }

// const newPerson = {...person1, ...person2}
// console.log({newPerson});

//! task2.3 --------------------------

// let arr = [1,2,3,4,5,6]

// function fn (mas) {

// const newMas = [...mas, 0]
// return newMas

// }

// console.log(fn(arr));


//! task2.4 --------------------------

// const person = {
//     name: 'Ylyk',
//     age: 21
// }
// const {name} = person
// const newPerson = {...person, city: 'Bishkek'}

// console.log({newPerson});


//! task2.5 --------------------------

// const person = {
//     name: 'Aidar',
//     age: 20,
//     city: 'Dubai'

// }

// console.log({...person});


//? -----------------------------------------------------------------------------------------------------------------------------------


//!task3.1

// const person = {
//     name: 'Dima',
//     age: 16,
//     city: 'Bishkek'
// }

// let {city, ...newPerson} = person
// console.log(newPerson);


//! task3.2 --------------------------

// let numbers = [1,2,3,4,5] 
// const [first, ...newArr] = numbers
// console.log(numbers);


//! task3.3 --------------------------

// const person1 = {
//     name: 'Nadira',
//     age: 19
// }

// const person2 = {
//     city: 'Bishkek',
//     gender: 'Female'

// }

// const {name} = person1
// const newPerson = {name, ...person2}
// console.log({newPerson});


//! task3.4 --------------------------

// const person = {
//     name: 'Dima',
//     age: 16
// }
// const hobbies = ['Gym', 'Js', 'Car']
// const newPerson = {...person, hobbies }
// console.log({newPerson});


//! task3.5 --------------------------
// function fn (obj) {
//     console.log({...obj, country: 'USA'});
// }
 

// const person = { 
//     name: 'Aidar',
//     age:20,
//     city: 'Dubai'
// }


// fn(person)
