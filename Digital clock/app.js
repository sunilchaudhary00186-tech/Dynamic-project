let digitalClock=()=>{
    let time=document.getElementById('time')
    let dmy=document.getElementById('dmy')

    let dateObj= new Date()
    time.innerText=dateObj.toLocaleTimeString()
    dmy.innerText=dateObj.toLocaleDateString()
    
}