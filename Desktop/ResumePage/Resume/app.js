var navmenuAnchorTags=document.querySelectorAll('.nav-menu a');
console.log(navmenuAnchorTags);
var interval;
for(let i=0;i<navmenuAnchorTags.length;i++){

    navmenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
    
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
         console.log(targetSection);
               
            interval=setInterval(function(){
         
         scrollVertically(targetSection);
                
               },20)
            });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
                if(targetSectionCoordinates.top<=0){
                    clearInterval(interval);
                return; 
                }
                
                window.scrollBy(0,50);
}



var progressBars=document.querySelector('.skill-progress > div');
var skillsContainer=document.getElementById('skills-display');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initializeBars(){
    for(let bar of progressBars ){
        bar.style.width=0+'%';
    }
}

function fillBars(){
    
}

function checkScroll(){

    //you have to check whether skill container is visible
   
    var coordinates=skillsContainer.getBoundingClientRect();

    if(!animationDone && coordinates.top<window.innerHeight){
        //fillBars
        animationDone=true;
        console.log('Skills section is visible');
    }



}