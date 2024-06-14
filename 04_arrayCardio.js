const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
  ];

const people = ['Beck, Glenn', 'Becker, Carl', 'Zeckett, Samuel', 'Aeddoes, Mick',
'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi'
, 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken'
, 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo,Frank',
 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


 //1.Filter the list of inventors for those who were born in the 1500's
 function bornIn1500(object){
    if(object.year>=1500 && object.year<1600){
        return true;
    }
 }

 //2. Give us an array of the inventors first and last names
 function myFunction(e){
    return `${e.first} ${e.last}`
 }
 const firstAndLastName= inventors.map(myFunction)
 console.log(firstAndLastName)

 //3. Sort the inventors by birthdate, oldest to youngest
console.log(inventors.sort(function(a,b){
    return a.year-b.year;   // if + then swap ... and ... - or 0 no swap
}))

//4.How many years did all the inventors live ??
function yearlived(total, e){
    return total+(e.passed-e.year);

}
let totalYears= inventors.reduce(yearlived, 0)
console.log(totalYears)

//5.Sort inventors by year lived
const sortByLive=inventors.sort(function(a,b){
    return (a.passed-a.year)-(b.passed-b.year);   // if + then swap ... and ... - or 0 no swap
})
console.log(sortByLive);
console.log(sortByLive.map((e)=>{
    return e.passed-e.year;
}))

const arr = people.sort((a, b) => {
    const lastNameA = a.split(', ')[1];
    const lastNameB = b.split(', ')[1];
    if (lastNameA && lastNameB) {
        return lastNameA.localeCompare(lastNameB);
    } else {
        // Handle case where last name is missing
        return 0; // or some other value depending on your requirements
    }
});

console.log(arr);


console.log(arr);

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const vehicle= data.reduce(function(obj,item){
    if(!obj[item]){
        obj[item]=0;
    }
    obj[item]++;
    return obj;
},{})
console.log(vehicle)
