let card1Name = document.getElementById('card1Name')
let card1Image = document.getElementById('card1Image')
let card1Status = document.getElementById('card1Status')
let card1Species = document.getElementById('card1Species')
let card1Gender = document.getElementById('card1Gender')
let card1Origin = document.getElementById('card1Origin')
let card1Location = document.getElementById('card1Location')
 
let card2Name = document.getElementById('card2Name')
let card2Image = document.getElementById('card2Image')
let card2Status = document.getElementById('card2Status')
let card2Species = document.getElementById('card2Species')
let card2Gender = document.getElementById('card2Gender')
let card2Origin = document.getElementById('card2Origin')
let card2Location = document.getElementById('card2Location')
 
let card3Name = document.getElementById('card3Name')
let card3Image = document.getElementById('card3Image')
let card3Status = document.getElementById('card3Status')
let card3Species = document.getElementById('card3Species')
let card3Gender = document.getElementById('card3Gender')
let card3Origin = document.getElementById('card3Origin')
let card3Location = document.getElementById('card3Location')
 
let card4Name = document.getElementById('card4Name')
let card4Image = document.getElementById('card4Image')
let card4Status = document.getElementById('card4Status')
let card4Species = document.getElementById('card4Species')
let card4Gender = document.getElementById('card4Gender')
let card4Origin = document.getElementById('card4Origin')
let card4Location = document.getElementById('card4Location')
 
let card5Name = document.getElementById('card5Name')
let card5Image = document.getElementById('card5Image')
let card5Status = document.getElementById('card5Status')
let card5Species = document.getElementById('card5Species')
let card5Gender = document.getElementById('card5Gender')
let card5Origin = document.getElementById('card5Origin')
let card5Location = document.getElementById('card5Location')
 
let card6Name = document.getElementById('card6Name')
let card6Image = document.getElementById('card6Image')
let card6Status = document.getElementById('card6Status')
let card6Species = document.getElementById('card6Species')
let card6Gender = document.getElementById('card6Gender')
let card6Origin = document.getElementById('card6Origin')
let card6Location = document.getElementById('card6Location')
 


fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        card1Name.innerText = `NAME: ${data.results[0].name}`
        card1Image.src = data.results[0].image
        card1Status.innerText = `STATUS :${data.results[0].status}` 
        card1Species.innerText = `SPECIES: ${data.results[0].species}`
        card1Gender.innerText = `GENDER: ${data.results[0].gender}`
        card1Origin.innerText = `ORIGIN: ${data.results[0].origin.name}`
        card1Location.innerText = `LOCATION: ${data.results[0].location.name}`
         
        card2Name.innerText = `NAME: ${data.results[1].name}`
        card2Image.src = data.results[1].image
        card2Status.innerText = `STATUS :${data.results[1].status}` 
        card2Species.innerText = `SPECIES: ${data.results[1].species}`
        card2Gender.innerText = `GENDER: ${data.results[1].gender}`
        card2Origin.innerText = `ORIGIN: ${data.results[1].origin.name}`
        card2Location.innerText = `LOCATION: ${data.results[1].location.name}`
         
        card3Name.innerText = `NAME: ${data.results[2].name}`
        card3Image.src = data.results[2].image
        card3Status.innerText = `STATUS :${data.results[2].status}` 
        card3Species.innerText = `SPECIES: ${data.results[2].species}`
        card3Gender.innerText = `GENDER: ${data.results[2].gender}`
        card3Origin.innerText = `ORIGIN: ${data.results[2].origin.name}`
        card3Location.innerText = `LOCATION: ${data.results[2].location.name}`
         
        card4Name.innerText = `NAME: ${data.results[3].name}`
        card4Image.src = data.results[3].image
        card4Status.innerText = `STATUS :${data.results[3].status}` 
        card4Species.innerText = `SPECIES: ${data.results[3].species}`
        card4Gender.innerText = `GENDER: ${data.results[3].gender}`
        card4Origin.innerText = `ORIGIN: ${data.results[3].origin.name}`
        card4Location.innerText = `LOCATION: ${data.results[3].location.name}`
         
        card5Name.innerText = `NAME: ${data.results[4].name}`
        card5Image.src = data.results[4].image
        card5Status.innerText = `STATUS :${data.results[4].status}` 
        card5Species.innerText = `SPECIES: ${data.results[4].species}`
        card5Gender.innerText = `GENDER: ${data.results[4].gender}`
        card5Origin.innerText = `ORIGIN: ${data.results[4].origin.name}`
        card5Location.innerText = `LOCATION: ${data.results[4].location.name}`
         
        card6Name.innerText = `NAME: ${data.results[5].name}`
        card6Image.src = data.results[5].image
        card6Status.innerText = `STATUS :${data.results[5].status}` 
        card6Species.innerText = `SPECIES: ${data.results[5].species}`
        card6Gender.innerText = `GENDER: ${data.results[5].gender}`
        card6Origin.innerText = `ORIGIN: ${data.results[5].origin.name}`
        card6Location.innerText = `LOCATION: ${data.results[5].location.name}`
         
    })
    