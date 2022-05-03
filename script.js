var i = 0;
var opacity = 0;
var intervalID = 0;

//Loading bar effect
function loadingBar() {
    if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, 35);
    function frame() {
    if (width >= 100) {
        clearInterval(id);
        setInterval(hide, 50);
        i = 0;
    } else {
        width++;
        document.getElementById("myBar").style.width = width + "%";
      }
    }
  }
}

//Hide loading text
function hide(){
    var LoadingText = document.getElementById("loading-text");
    opacity = Number(window.getComputedStyle(LoadingText).getPropertyValue("opacity"))
    if(opacity>0){
            opacity=opacity-0.1;
            LoadingText.style.opacity=opacity
            }
            else{
                clearInterval(intervalID); 
                LoadingText.style.display="none";
                const myDiv = $('#myProgress');

                setTimeout(()=>{
                myDiv.addClass('rotated');
                setInterval(show, 500);
                }, 100);
            }
}

function show(){
    var navBox = document.getElementById("navbox");
    var logo = document.getElementById("Logobox");
    var text = document.getElementById("Text");
    var LoadingText = document.getElementById("loading-text");
    opacity = Number(window.getComputedStyle(navBox).getPropertyValue("opacity"))
    if(opacity<1){
            opacity=opacity+0.1;
            navbox.style.opacity=opacity
            logo.style.opacity=opacity
            text.style.opacity=opacity
            LoadingText.style.display="none";
            }
            else{
                clearInterval(intervalID); 
            }
}

//Loading dot effects
var dots = window.setInterval( function() {
    var wait = document.getElementById("wait");
    if ( wait.innerHTML.length > 2 ) 
        wait.innerHTML = "";
    else 
        wait.innerHTML += ".";
    }, 500);

    window.onload=loadingBar();
