
// stop();
let time;    
function copyPast() {
    stop();
    time = setTimeout( function() {
            let copy = document.getElementById("copy").value;
            document.getElementById("past").textContent = copy; 
        
            
            // console.log(time);
        }, 300)  
}    

function stop(){
    clearTimeout(time);
}    
      



//  if (copy != document.getElementById("copy").value){
//             console.log("new")
//         } else {
//             
//         }

