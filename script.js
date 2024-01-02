var displaytime = document.querySelector('.displaytime')
var stop = document.querySelector('.stop')
var Start = document.querySelector('.Start')
var reset = document.querySelector('.reset')
let timer = null


let [seconds,minustes,hours] = [0,0,0]

function stopwatch(){
    seconds++
    if(seconds==60){
        seconds=0
        minustes++;
        if(minustes==60){
            hours++
            minustes=0
        }
    }
    displaytime.innerHTML = hours+':'+ minustes+':'+seconds
}

Start.addEventListener('click',function startwatch(){
    if(timer!=null){
        [seconds,minustes,hours] = [0,0,0]
    }else{
        timer = setInterval(stopwatch,1000)
    }

})

reset.addEventListener('click', ()=>{
    clearInterval(timer)
    timer = null
    displaytime.innerHTML = '00:00:00'
    seconds = 0
    minustes = 0
    hours = 0  
})

stop.addEventListener('click',()=>{
    clearInterval(timer)
    timer = null
    
})