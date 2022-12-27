function hello(){
    for(i=0; i<document.querySelectorAll("button").length; i++){
        document.querySelectorAll("button")[i].addEventListener("click", function(){
               var drum = this.innerHTML;
               switch (drum) {
                case "w":
                    var drum1 = new Audio("sounds/crash.mp3");
                    drum1.play();
                    break;
               
                default:
                    break;
               }
        })
    }
}