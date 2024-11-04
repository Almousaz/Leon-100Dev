



 const URL = "https://www.dnd5eapi.co/api/";




//  'https://www.dnd5eapi.co/api/monsters/:index' 


// Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click' , getFetch)


function getFetch() {

    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
    //  parse response as JSON
        .then(res => res.json())
        .then(data => {
            console.log(data.subclasses)
            data.subclasses.forEach( obj => {
                console.log(obj)
                // create an li
                    const li = document.createElement('li')
                // add text to li
                    li.textContent = obj.name
                // append the li to the ul
                    document.querySelector('ul').appendChild(li)
                });
                
                
            }) 
            .catch(err => {
                console.log(`error ${err}`);
                
            }) 
}


// const getData = axios.get(URL)
// .then( res => console.log(res.data))
    
    