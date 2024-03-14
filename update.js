let decrease = document.getElementById('decrease')
let increase = document.getElementById('increase')
let counter = document.getElementById('counter')
let total = document.getElementById('total')
let pricee = document.getElementById('pricee')
let count = document.getElementById('count')


increase.onclick = () =>{
  counter.textContent = parseInt(counter.textContent) + 1
  total.textContent = parseInt(counter.textContent) * parseInt(pricee.textContent)
  count.textContent = parseInt(count.textContent) + 1
}

decrease.onclick = () =>{
if(parseInt(counter.textContent) > 0){
    counter.textContent = parseInt(counter.textContent) - 1  
    total.textContent = parseInt(counter.textContent) * parseInt(pricee.textContent)
}
}
