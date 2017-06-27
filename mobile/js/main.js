
    $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', 'lastPage'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000,
            navigation: true,
            navigationPosition: 'right',
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            responsiveSlides: true,
            responsiveWidth: 1023,
            responsiveHeight: 767
        });

        $('#showExamples').click(function(e){
            e.stopPropagation();
            e.preventDefault();
            $('#examplesList').toggle();
        });

        $('html').click(function(){
            $('#examplesList').hide();
        });
    });
 $(function(){
    $(document).ready(function() {
        var heightH = $(window).height();
        var heightW = $(window).width();
        if ((heightW < 1023) || (heightH < 767)) {
            $('.wrapper').removeAttr('id');
            $('.wrapper').removeClass('fullpage-wrapper');
            $('section').removeClass('ovh');
        }
        else {
            if($('.wrapper').is('id')) {
                $('.wrapper').Attr('id', 'fullpage');
            }
                $('section').addClass('ovh');
        }
    })
    $(window).resize(function() {
        var heightH = $(window).height();
        var heightW = $(window).width();
        if ((heightW < 1023) || (heightH < 767)) {
            $('.wrapper').removeAttr('id');
            $('.wrapper').removeClass('fullpage-wrapper');
            $('section').removeClass('ovh');
        }
        else {
            if($('.wrapper').is('id')) {
                $('.wrapper').Attr('id', 'fullpage');
            }
                $('.section').addClass('ovh');
        }
    })
    $(window).scroll(function() {
        heightW = $(window).scrollTop();
    })
})
