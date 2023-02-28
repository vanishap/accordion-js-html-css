let accordion = document.getElementsByClassName('accordion');
for(let i =0; i<accordion.length;i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle("active");

    let text = this.nextElementSibling;
    if(text.style.display === "block"){
        text.style.display = "none"
    }else {
        text.style.display = "block"
    }
    })  
}
 


