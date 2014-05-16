/**
 * Created by romain on 24/04/14.
 */


$(function() {
    /*$( '.panel-heading' ).hover(
     function(){
     $(this).find("a").trigger("click");
     $(this).find("h3").css('color','#001649');
     $(this).animate({
     'background-position-x': "0px"
     });
     },
     function(){
     $(this).find("a").trigger("click");
     $(this).find("h3").css('color','white');
     $(this).animate({
     'background-position-x': "-290px"
     });
     })*/

    $('img#maiImg').hover(function(){
        $(this).attr('src','images/mai_reverse.png');
    }, function(){
        $(this).attr('src','images/mai.png');
    })

    $('img#octobreImg').hover(function(){
        $(this).attr('src','images/octobre_inverse.png');
    }, function(){
        $(this).attr('src','images/octobre.png');
    })

    $('img#janvierImg').hover(function(){
        $(this).attr('src','images/janvier_inverse.png');
    }, function(){
        $(this).attr('src','images/janvier.png');
    })

    $('img#fevrierImg').hover(function(){
        $(this).attr('src','images/fevrier_inverse.png');
    }, function(){
        $(this).attr('src','images/fevrier.png');
    })


    // Slideshow controls
    $('#slideshow-controls button').hover(function(){
        $(this).html('<img src="images/bouton_slideshow_plein.png">');
    }, function(){
        if (!$(this).hasClass('active'))
            $(this).html('<img src="images/bouton_slideshow_vide.png">');
    })

    $('#slideshow-controls button').click(function(){
        $('#slideshow-controls button.active').removeClass('active').html('<img src="images/bouton_slideshow_vide.png">');
        $(this).addClass('active').html('<img src="images/bouton_slideshow_plein.png">');
//        $('#slideshow img').css('display','none');
//        $('#slideshow img.' + $(this).attr('id')).css('display','block');
        $('body').css('background','url("images/slideshow/00' + $(this).attr('id') + '.jpg") no-repeat center fixed')
            .css('background-size', 'cover');
        $('.quote').css('display', 'none');
        $('#q' + $(this).attr('id')).css('display','block');
    })

    var intervalID = setInterval(function(){
        //console.log($('#slideshow-controls button.active').attr("id"));
        if ($('#slideshow-controls button.active').attr('id')=="4")
            $('#slideshow-controls button#1').click();
        else
            $('#slideshow-controls button.active').next('#slideshow-controls button').click();
    }, 8000);


    // Accordion
    $('#accordion .header').click(function(){
        var id = $(this).attr('id');
        if ($('#accordion .body.active').prev('.header').attr('id') == undefined)
        {
            $('#accordion .body.'+id).css('display','inline-block').animate({ width: '400px' }, 300).addClass('active');
            $('#accordion .header#' + id + ' img.fleche').rotate(180);
            $('#accordion').animate({ 'margin-right': '100px' }, 300);
        }
        else if ($('#accordion .body.active').prev('.header').attr('id') == id)
        {
            $('#accordion .body.active').removeClass('active').animate({
                width: "0"
            }, 300, function() {
                $(this).css('display','none');
            });
            $('#accordion .header img.fleche').rotate(0);
            $('#accordion').animate({ 'margin-right': '300px' }, 300);
        }
        else
        {
            $('#accordion .body.active').removeClass('active').animate({
                width: "0"
            }, 300, function() {
                $(this).css('display','none');
            });
            $('#accordion .header img.fleche').rotate(0);
            $('#accordion .body.'+id).css('display','inline-block').animate({ width: '400px' }, 300).addClass('active');
            $('#accordion .header#' + id + ' img.fleche').rotate(180);
        }
    })

    // Dropdown
    $('#downloads .header').click(function(){
        if ($(this).hasClass('collapsed'))
        {
            $(this).removeClass('collapsed');
            $('#downloads .content').animate(
                { 'height': '278px' },
                300,
                function(){
                    $('#downloads .header').addClass('expanded');
                    $('#downloads .header img').rotate(180);
                }
            );
        }
        if ($(this).hasClass('expanded'))
        {
            $(this).removeClass('expanded');
            $('#downloads .content').animate(
                { 'height': '0px' },
                300,
                function(){
                    $('#downloads .header').addClass('collapsed');
                    $('#downloads .header img').rotate(0);
                }
            );
        }
    })

    $('#mentions .header').click(function(){
        if ($(this).hasClass('collapsed'))
        {
            $(this).removeClass('collapsed');
            $('#mentions .content').animate(
                { 'height': '190px' },
                300,
                function(){
                    $('#mentions .header').addClass('expanded');
                    $('#mentions .header img').rotate(180);
                }
            );
        }
        if ($(this).hasClass('expanded'))
        {
            $(this).removeClass('expanded');
            $('#mentions .content').animate(
                { 'height': '0px' },
                300,
                function(){
                    $('#mentions .header').addClass('collapsed');
                    $('#mentions .header img').rotate(0);
                }
            );
        }
    })

    $(window).load(function(){
        setTimeout(function(){
            $('#chargement').css('display', 'none');
            $('#site').css('visibility', 'visible');
        }, 5000);
    });

})
