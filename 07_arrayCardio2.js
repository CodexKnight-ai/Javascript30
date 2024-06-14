const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
const atLeast19= people.some(function(person){
    const curr= (new Date()).getFullYear()
    if(curr-person.year>=19){
        return true
    }
    else false;
})
console.log(atLeast19)

// Array.prototype.every() // is everyone 19?

const every19= people.every(function(person){
    const curr= (new Date()).getFullYear()
    if(curr-person.year>=19){
        return true
    }
    else false;
})
console.log(every19)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment= comments.find(function(person){
    if(person.id==823423){
        return true
    }
})
console.log(comment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index= comments.findIndex(function(person){
    if(person.id==823423){
        return true;
    }
})
console.log(index)
const ansArr=[
...comments.splice(0,index),
...comments.splice(index+1)
];
console.log(ansArr)