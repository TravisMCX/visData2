function retriveData(numberOfUsers){
    const baseUrl = "https://randomuser.me/api/?results="
    const url = encodeURI(baseUrl + numberOfUsers)
fetch(url)
    .then(function(response){
    return response.json()
    })
    .then(function(json){
        const body = document.querySelector("body")
        const people = json.results
        for(const person of people){
            body.innerText += person.email+"\n"
        }
    })
}
retriveData(60)

function organize(people) {
    
}