/**
 * Created by romain on 24/04/14.
 */


$(function() {
    $( 'h4.panel-title a' ).hover(
        function(){
            $(this).trigger("click");
        },
    function(){
        $(this).trigger("click");
    })
})
