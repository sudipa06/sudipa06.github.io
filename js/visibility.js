document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "SUDIPA | SOFTWARE DEVELOPER";
        
    }
    else{
        document.title = "Comeback to portfolio";
    }
})