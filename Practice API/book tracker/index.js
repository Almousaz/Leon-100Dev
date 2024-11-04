
// Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click' , getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books')


function getFetch() {

    const choice = document.querySelector('input').value
    console.log(choice);

    const url = `https://openlibrary.org/isbn/${choice}.json`

    fetch(url)
    // parse response as json
        .then(res => res.json())
        .then(data => {
            console.log(data.title)
            if(!choice) {
                alert('Please enter a valid ISBN.');
        return
            }

            if(!localStorage.getItem('books')){

                localStorage.setItem('books' , data.title)
            }else{

                let books = localStorage.getItem('books') + " ; " + data.title
                localStorage.setItem('books' , books )
            }
                //  put title into localStorage
            //     let books = localStorage.getItem('books') + " ; " + data.title
            //     localStorage.setItem('books' , books )
            document.querySelector('h2').innerText = localStorage.getItem('books')
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}