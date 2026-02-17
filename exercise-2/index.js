function startTime(){

    const today = new Date();
    let hour = today.getHours();
    let mins = today.getMinutes();
    let seconds = today.getSeconds();

    let am_pm = hour >= 12 ? 'PM' : 'AM';

    let messagebox='';
    
    hour = hour%12;

    if(!hour){
        hour = 12;
    }
    mins =checkTime(mins);
    seconds = checkTime(seconds);

    if(am_pm == 'AM' && hour > 0){
        messagebox = "Good Morning_";
    }else{
        if(hour < 6){
            messagebox = "Good Afternoon_";
        }else{
            messagebox = "Good Evening_";
        }
    }

    document.getElementById("messageBox").innerHTML = messagebox;

    document.getElementById("time-now").innerHTML = hour+":"+mins+":"+seconds+':'+am_pm;

    setTimeout(startTime, 1000);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  
    return i;
}