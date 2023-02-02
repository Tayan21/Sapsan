function addData(data) {
  const div = document.createElement('div')
  const text = document.createElement('h1')
  text.innerHTML = data
  div.appendChild(text)
  document.body.append(div)

}


//HW Method GET async
const asyncFunc = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json 
} 


asyncFunc("https://my-json-server.typicode.com/Tayan21/serverasync/countries")
    .then(data => addData(data[0].country))
    .catch(e => console.log(e.message))


// //HW Method POST
const asyncFunc2 = async (url, method) => {
  const res = await fetch(url, method)
  const json = await res.json()
  return json 
} 
const data = {country: "France", capital: 'Paris'}
asyncFunc2("https://my-json-server.typicode.com/Tayan21/serverasync/countries", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
  })
    .then(data => addData(data.country))
    .catch(e => console.log(e.message))


// //HW Method PUT

const data2 = {
    country: "Spain",
    capital: "Madrid",
    id: 1
}

asyncFunc2("https://my-json-server.typicode.com/Tayan21/serverasync/countries/1", {
    method: 'PUT',
    body: JSON.stringify(data2),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
    .then(data => addData(data.country))
    .catch(e => console.log(e))

// //HW Method PATCH

asyncFunc2('https://my-json-server.typicode.com/Tayan21/serverasync/countries/1', {
  method: 'PATCH',
  body: JSON.stringify({
    country: 'Greece',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((json) => addData(data.country))
  .catch(e => console.log(e))


  
  //HW Method DELETE
  asyncFunc2('https://my-json-server.typicode.com/Tayan21/newserver/posts/1', {
  method: 'DELETE',
})
.then(data => addData())