const button = document.getElementById('button')
const img = document.getElementById('photo')


const asyncFunc = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json 
} 
 
button.addEventListener('click', () => {
    try {
        asyncFunc("https://my-json-server.typicode.com/Tayan21/projectserv/drms")
        .then(data => img.src=`${data[data.length-1].image}`)
        
    } catch(er) {
        console.error(er)
    }
})


