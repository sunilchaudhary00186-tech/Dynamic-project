let generatedOTP=()=>{
    let display =document.getElementById('display')
    let randomNum=Math.random()*10000 
    let otp= Math.floor(randomNum);
    (otp>999) ? display.innerText=otp:genearatedOTP()

}