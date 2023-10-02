$(window).on('load', function () {
    $("#loader-wrapper").fadeOut(700);

    let ocTexts = ['Leather Worker', 'Test', 'Test2'];
    let ocIndex = 0;

    function rotateOcupations() {
        $(".oc-text").fadeOut(500, function(){
            $(this).text(ocTexts[ocIndex]).fadeIn(500);
        });
    
        ocIndex = (ocIndex + 1) % ocTexts.length;
    }

    setInterval(rotateOcupations, 2000);
});