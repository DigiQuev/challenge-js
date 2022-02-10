const button = document.querySelector('.btn')
const toastCont = document.querySelector('.toasts')

const msg = ['Toast']

button.addEventListener('click', () => createToast())

function createToast(){
  const toastEl = document.createElement('div')
  toastEl.classList.add('toast')
  toastEl.innerText = msg
  
  toastCont.appendChild(toastEl)
  
  setTimeout(() => {toastEl.remove()}, 2000)
}
