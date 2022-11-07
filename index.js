let homePoint = document.getElementById("home-point")
let guestPoint = document.getElementById("guest-point")

let pointHome=0;
let pointGuest=0;

function addOne(id,point){
    if(point==pointHome){
        pointHome+=1
        id.textContent=pointHome
    }
    else{
        pointGuest +=1
        id.textContent=pointGuest
    }
}

function addTwo(id,point){
   if(point==pointHome){
        pointHome+=2
        id.textContent=pointHome
    }
    else{
        pointGuest +=2
        id.textContent=pointGuest
    }
}

function addThree(id,point){
    if(point==pointHome){
        pointHome+=3
        id.textContent=pointHome
    }
    else{
        pointGuest +=3
        id.textContent=pointGuest
    }
}

function reset(){
    pointHome=0
    pointGuest=0
    homePoint.textContent=pointHome
    guestPoint.textContent=pointGuest
}