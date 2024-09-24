const flip = document.querySelectorAll  (".window");
const lip = document.querySelectorAll(".card");
const closeSide = document.querySelector('.closebtn');
const openSide = document.querySelector('.openbtn');

for(let i = 0; i < flip.length; i++){
  let upOrDown = true;    
  flip[i].onclick = () => {    
      if(upOrDown){
        lip[i].style = ("cursor: pointer; transform: rotateY(180deg);")
        upOrDown = false;
    } else {
        lip[i].style = ("rotateY(0deg)");
        upOrDown = true;
    }
  }
}

openSide.onclick = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

closeSide.onclick = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}