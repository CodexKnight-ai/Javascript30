const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    cities.push(...data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);  // Handle any errors that occur during the fetch
  });
function findMatches( wordMatch, cities){
  return cities.filter(place=>{
    const regex = new RegExp(wordMatch,'gi')
    return place.city.match(regex)||place.state.match(regex)
})
}
const search=document.querySelector('#box-input')
const container=document.querySelector('.list')

function displayMatches(){
  const matchingArray=findMatches(this.value,cities)
  const html= matchingArray.map(place=>{
    const regex= new RegExp(this.value,'gi')
    const cityName= place.city.replace(regex,`<span class='hl'>${this.value}</span>`)
    const stateName= place.state.replace(regex,`<span class='hl'>${this.value}</span>`)
    return `
    <li>
    <span class='name'> ${cityName},${stateName} </span>
    <span class='population'> ${place.population} </span>
    ` 
  }).join('')
container.innerHTML=html
}


search.addEventListener('change',displayMatches)
search.addEventListener('keyup',displayMatches)
