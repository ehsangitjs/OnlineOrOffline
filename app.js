setInterval(()=>{
    if(navigator.onLine){
        document.querySelector('.online').style.display="flex"
        document.querySelector('.offline').style.display="none"
    }
    if(navigator.onLine == false){
        document.querySelector('.offline').style.display="flex"
        document.querySelector('.online').style.display="none"
    }
},10)