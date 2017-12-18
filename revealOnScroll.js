//    var $window = $(window),
//    win_width_padded = $window.width();
//
//    var isTouch = Modernizr.touch;

scrollSubscribers = [];

    function addScrollSubscriber(documentId, percent, vertical){
        scrollSubscribers.push([documentId, percent, vertical]);
    }

    function handeScrollSubsribers(){
        for (var i=0; i<scrollSubscribers.length; i++){
            var subscriber = scrollSubscribers[i]
            revialOnScroll(subscriber[0], subscriber[1], subscriber[2];
        }
    }
     
     function scrolled(){
        if (window.pageXOffset !== undefined) 
            return window.pageXOffset;
         else 
            return (document.documentElement || document.body.parentNode || document.body).scrollleft;
    }
     
    function revialOnScroll (documentId, percent, vertical){
        var body = document.body;
        var html = document.documentElement;
        var documentLength = 0 
            if (vertical)
                Math.max(   body.scrollHeight,
                            body.offsetHeight,
                            html.clientHeight,
                            html.scrollHeight,
                            html.offsetHeight)
            else 
                Math.max(   body.scrollWidth,
                            body.offsetWidth,
                            html.clientWidth,
                            html.scrollWidth,
                            html.offsetWidth);
        var scrollValue = scrolled();
        var currentScroll=(scrollValue + window.innerWidth)/documentLength;

        if (currentScroll >= percent) {
            console.log(currentScroll+ ' '+ documentId + ' ' + vertical + ' ' + percent); 
                $('#'+documentId).animate({
                opacity:1,
                    width: '150%',
                
                },1500
            );
                
        }
    };

$(window).on('scroll', handeScrollSubsribers);