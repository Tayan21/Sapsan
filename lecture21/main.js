document.addEventListener('keydown', function(e) {
  let key = e.key
  let drum = document.querySelector(`[data-key=${key}]`)
  let audio = document.querySelector(`[data-a=${key}]`)

  drum.classList.add('hit')
  setTimeout(() => {
    drum.classList.remove('hit')
  }, 100)

  audio.currentTime = 0;
  audio.play()
})

document.addEventListener('click', function(e) {
  let key = e.target.getAttribute('data-key')
  let drum = document.querySelector(`[data-key=${key}]`)
  let audio = document.querySelector(`[data-a=${key}]`)

  drum.classList.add('hit')
  setTimeout(() => {
    drum.classList.remove('hit')
  }, 100)

  audio.currentTime = 0;
  audio.play()
})

const asyncFunc = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json 
} 

asyncFunc("https://my-json-server.typicode.com/Tayan21/projectserv/drums")
    .then(data => {
      for(let i = 0; i < data.length; i++) {
        if(data[i]['name'] == "drum") {
          let drums = document.createElement('div')
          drums.setAttribute('class', data[i]['name'])
          drums.style.background = `url(${data[i]['image']})`
          document.body.appendChild(drums)
          for(let i = 0; i < data.length-1; i++) {
            let div = document.createElement('div')
            let key = document.createElement('div')

            key.innerHTML = `${data[i]['data-key'].toUpperCase()}`
            div.append(key)

            div.setAttribute('data-key', data[i]['data-key'])
            div.setAttribute('class', data[i].name)
            div.style.background = `url(${data[i]['image']})` 
            drums.append(div)
          }
        }
      }
      
      for(let i = 0; i < data.length-1; i++) {
        let audio = document.createElement('audio')
        audio.setAttribute('data-a', data[i]['data-a'])
        audio.setAttribute('src', data[i]['folder']) 
        document.body.appendChild(audio)
      }
    })
    .catch(e => console.log(e.message))


