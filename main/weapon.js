let intervalId = null;
let counter = 1;

const inputs = document.querySelectorAll(".label");
const modals = document.querySelectorAll(".modal");
const toggle = document.querySelectorAll("input");
const black = document.querySelector("body");

const onSlide = () => {
    intervalId = setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    if(counter < 5){
        counter++;
    } else {
        counter = 1;
    }
}, 3000);   
}

const onOrOff = () => {
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    } else {
        onSlide();
    }
}

const loadON = () => {
    for(let i = 0; i < modals.length; i++){
        modals[i].onload = modals[i].style.display = "none"
    }   
    onSlide()   
}

modals.forEach(i => {
    i.addEventListener("mouseover", () => {onOrOff()});
})

inputs.forEach((index) => {
    index.addEventListener("click", () => {
        modals.forEach(i => {
            if(i.style.display === "none"){
                i.style.display = "block";  
            } else {
                i.style.display = "none";
            }   
        })  
    })
});

toggle.forEach(i => {
    i.addEventListener("click", () => {
        modals.forEach(i => {
            i.style.display = "none";
        })
        clearInterval(intervalId);  
        intervalId = null
    })
})

loadON()




