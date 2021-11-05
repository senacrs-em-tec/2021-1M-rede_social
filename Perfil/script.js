$(dark).click(function() {
    $("*").toggleClass("darkmode");
    $("hr").toggleClass("semi-darkmode") 
    $("article svg, section svg, header svg").toggleClass("fill")
});