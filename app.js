const scriptURL = 'https://script.google.com/home/projects/1CxnpahhKLfMhRCc0H-YskX3JyeF6zHjk0fEJXIxIZwODJ_vW1ruQPkEM//exec'
const form = document.forms['google-sheet']
          
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form),headers:{'Content-Type':'text/plain;charset=utf-8',}})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})