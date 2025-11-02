let input=document.querySelector('input')
let getVal=(e)=>{
input.value+=e.target.innerText
}

let calculate=()=>{
    input.value=eval(input.value)
}

let clearALL=()=>{
    input.value=""
}