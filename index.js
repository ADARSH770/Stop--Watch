let sec = 0;
let min = 0;
let hr = 0;
let btn = document.getElementById('play')

var mytime;

function playtime(){
     mytime = setInterval(mytimer,1000)
     
    btn.disabled = true;
}
function pausetime(){
    const mytime2 = clearInterval(mytime,1000)
    btn.disabled = false;
}
function restart(){
    const mytime3 = clearInterval(mytime,1000)
    sec = 0;
    min =0;
    hr=0
   
    document.getElementById('ht').innerHTML = "0"+sec;
    document.getElementById('hs').innerHTML = "0"+min;
    document.getElementById('hf').innerHTML = "0"+hr;
    btn.disabled = false;
}

function mytimer(){
    sec+=1;
    if(sec==60){
        min+=1;
        if(min<10){
            document.getElementById('hs').innerHTML ="0"+min;
        }else{
            document.getElementById('hs').innerHTML = min;
        }
        
        sec = 0;
    }
    if(min==60){
        hr+=1;
        if(hr<10){
            document.getElementById('hf').innerHTML = "0"+hr;
        }else{
            document.getElementById('hf').innerHTML = hr;
        }
        
        min = 0;
    }
    if(sec<10){
        document.getElementById('ht').innerHTML = "0"+sec
    }else{
        document.getElementById('ht').innerHTML = sec
    }
    
}

