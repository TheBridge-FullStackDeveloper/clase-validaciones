const nameInput = document.querySelector("#name")
const emailInput = document.getElementById("email")
const btn = document.querySelector(".btn")
const form = document.getElementById("my-form")
const msgDiv = document.querySelector(".msg")

function sendForm(e) {
    e.preventDefault()
    if (nameInput.value === "" || emailInput.value === "") {
        msgDiv.innerHTML ="Please enter all fields"
      } 
      else if (/(\w+?@\w+?\x2E.+)/.test(email.value) !== true) {
        msgDiv.innerHTML = "Please enter a correct email";
      }    
      else {
        msgDiv.innerHTML = `<p>Nombre: ${nameInput.value}</p> <p>Correo: ${emailInput.value}</p>`
      }  
      setTimeout(() => {
       msgDiv.innerHTML=""
      }, 5000);  
}

// btn.addEventListener("click",sendForm)
form.addEventListener("submit",sendForm)


//* Expresiones regulares

let re;

re = /hello/i 

re = /^h/i; 

re = /World$/i 

re = /^hello$/i 

re = /^h.llo$/i


const result = re.test('h?llo')

console.log(result)
