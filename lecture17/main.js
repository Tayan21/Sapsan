



/*
let test = document.getElementById('test').innerHTML = "red";

let resume = document.getElementById('resume');
let blocks = resume.getElementsByTagName('div');
console.log(blocks)
let info = ['Bostybaev Tayan', "I am JS developer", "bostybaev@gmail.com"]
for(let i = 0; i < blocks.length; i++) {
  blocks[i].getElementsByTagName('p')[0].innerHTML = info[i]
}*/

//HW task1
let btn = document.getElementById('btn')
let text = document.getElementById('text')

function disappear() {
  text.style.display = 'none'
}

//HW Task2
let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', hidden)

function hidden() {
  btn2.style.display = 'none'
}

//HW Task3
let btn3 = document.getElementById('btn3')
let changeinput = document.getElementById('changeinput')


btn3.addEventListener('click', () => {
  changeinput.placeholder = changeinput.value
  changeinput.value = ''
});

//HW Task4