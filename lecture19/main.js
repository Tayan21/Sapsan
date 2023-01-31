


//HW Method GET
const fetchPromise = fetch("https://my-json-server.typicode.com/Tayan21/newserver/posts")
    .then(resolve => resolve.json())
    .then(data => {
        let res = document.querySelector('#get')
        
        res.innerHTML = data[0].title
    })
    .catch(e => console.log(e))

//HW Method GET
fetch("https://my-json-server.typicode.com/Tayan21/newserver/profile")
    .then(resolve => resolve.json())
    .then(data => {
        let res = document.querySelector('#test')
        res.innerHTML = data.name
    })
    .catch(e => console.log(e))


//HW Mthod POST
const data = {Thirsday: 1}

fetch("https://my-json-server.typicode.com/Tayan21/newserver/posts", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
    .then(resolve => resolve.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))


//HW Method PUT
const data2 = {
    id: 1,
    title: "Sapsan",
    code: "first"
}

fetch("https://my-json-server.typicode.com/Tayan21/newserver/posts/1", {
    method: 'PUT',
    body: JSON.stringify(data2),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
    .then(resolve => resolve.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))

//HW Method PATCH
fetch('https://my-json-server.typicode.com/Tayan21/newserver/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  
  //HW Method DELETE
  fetch('https://my-json-server.typicode.com/Tayan21/newserver/posts/1', {
  method: 'DELETE',
});