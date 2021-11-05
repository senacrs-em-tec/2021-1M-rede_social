$(dark).click(function() {
    $("*").toggleClass("darkmode");
    $("aside, aside h1, header, section, aside div, section div").toggleClass("darkmode-border")
    $("article div, article svg, article img, article h1").toggleClass("semi-darkmode") 
    $("article svg, section svg, header svg").toggleClass("fill")
});