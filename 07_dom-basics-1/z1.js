let time;
   
function timer() {
    stop();
    let getTime = document.getElementById("timerInput").value;
    

    time = setInterval( function() {
        

        if (getTime >= 0){
        
        document.getElementById("timerNumber").textContent = getTime;
        
        } 
        --getTime;
        // console.log(time);
    }, 1000)
}

function stop(){
    clearInterval(time);
}

