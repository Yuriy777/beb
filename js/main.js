
var flag = true;

function firstFn(e, speedSc){
  // Если флаг равен false, происходит выход
  if(!flag){
    return;  
  }
  console.log(22);
  secondFn(e, speedSc);
}
$(document).on('wheel MozMousePixelScroll mousewheel DOMMouseScroll durationThreshold verticalDistanceThreshold', function (e) {
    e.preventDefault();//prevent the default mousewheel scrolling
    var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 || e.originalEvent.deltaY < 0 ? 1 : -1;
    //if the delta value is negative, the user is scrolling down
    $('body').unbind('wheel MozMousePixelScroll mousewheel DOMMouseScroll durationThreshold verticalDistanceThreshold');
    if (delta < 0) {
        firstFn(1, 3000);

    } else {
        firstFn(-1, 1000);
    }
    
});
$(document).keydown(function( event ) {
  if ( event.which == 40 ) {
   event.preventDefault();
   firstFn(1, 3000);
  }
  if ( event.which == 38 ) {
   event.preventDefault();
   firstFn(-1, 1000);
  }
});
var position = [0, 3000, 6700, 9400, 11420, 14800, 17800, 19020];
var ps;
function secondFn(e, speedSc) {
  flag = false;
   var promise = new Promise(function(a, d)  {
    var heightH = $(window).scrollTop();
    // if (heightH < 2200 ) {
    //     ps = 0;
    // }
    // if ( heightH < 6000  && heightH > 2200) {
    //     ps = 1;
    // }
    // if (6000 < heightH && 7400 > heightH) {
    //     ps = 2;
    // }
    // if (7400 < heightH && 10000 > heightH) {
    //     ps = 3;
    // }
    // if (10000 < heightH && 12300 > heightH) {
    //     ps = 4;
    // }
    // if (12300 < heightH && 14900 > heightH) {
    //     ps = 5;
    // }
    // if (14900 < heightH && 19000 > heightH) {
    //     ps = 6;
    // }
    // if (19000 < heightH) {
    //      ps = 7;
    // }
    ps = ps + e;
    (ps < 0) ? (ps = 0) : ps;
    (ps > 7) ? (ps = 7) : ps;
    var posr = position[ps];
    var speedScr = speedSc;
    $('body, html').animate({scrollTop: posr }, speedScr, 'swing');
    setTimeout(a, speedScr);
  }).then(function() {
    flag = true;
  });
}

$(document).ready(function(){
    $('body').animate({scrollTop: 0 }, 2000, 'swing');
});

$('.section').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 60doc = vp-top',
        css: {
            'background': 'linear-gradient(to bottom,  rgba(70,200,233,1) 0%,rgba(70,200,233,1) 0%,rgba(70,200,233,1) 100%)'
        }
    },
    {
        from: 'doc-top + 50doc = vp-top',
        to: 'doc-top + 75doc = vp-top',
        cssFrom: {
            'background': 'linear-gradient(to bottom, rgba(70,200,233,1) 0%,rgba(70,200,233,1) 0%,rgba(70,200,233,1) 100%)'
        },
        cssTo: {
            'background': 'linear-gradient(to bottom, rgba(18,11,46,1) 0%,rgba(18,11,46,0.72) 34%,rgba(70,200,233,1) 100%)'
        }
    },
    {
        from: 'doc-top + 75doc = vp-top',
        to: 'doc-top + 80doc = vp-top',
        cssFrom: {
            'background': 'linear-gradient(to bottom, rgba(18,11,46,1) 0%,rgba(18,11,46,0.72) 35%,rgba(70,200,233,1) 100%)'
        },
        cssTo: {
            'background': 'linear-gradient(to bottom, rgba(18,11,46,1) 0%,rgba(18,11,46,1) 100%,rgba(70,200,233,1) 100%)'
        }
    },
    {
        from: 'doc-top + 80doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'background': 'linear-gradient(to bottom, rgba(18,11,46,1) 0%,rgba(18,11,46,1) 100%,rgba(70,200,233,1) 100%)'
        }
    }

], $('.wrapper'));
$('.head-backgraund').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 10doc = vp-top',
         cssFrom: {
            'height': '60%'
        },
        cssTo: {
            'height': '60%'
        }
    },
    {
        from: 'doc-top + 10doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
         cssFrom: {
            'height': '60%'
        },
        cssTo: {
            'height': '90%'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 15doc = vp-top',
         cssFrom: {
            'height': '90%'
        },
        cssTo: {
            'height': '100%'
        }
    }
    ,
    {
        from: 'doc-top + 15doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'height': '100%'
        }
    }
], $('.wrapper'));
$('.bottom-background').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 10doc = vp-top',
         cssFrom: {
            'height': '40%',
            'display': 'block'
        },
        cssTo: {
            'height': '40%',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 10doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
         cssFrom: {
            'height': '40%',
            'display': 'block'
        },
        cssTo: {
            'height': '10%',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 16doc = vp-top',
         cssFrom: {
            'height': '10%',
            'display': 'block'
        },
        cssTo: {
            'height': '0%',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 16doc = vp-top',
        to: 'doc-top + 20doc = vp-top',
        css: {
            'height': '0%',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 20doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'height': '0%',
            'display': 'none'
        }
    }
    

], $('.wrapper'));

$('.land').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 10doc = vp-top',
         css: {
            'height': '100%'
        }
    },
    {
        from: 'doc-top + 10doc = vp-top',
        to: 'doc-top + 37doc = vp-top',
         cssFrom: {
            'height': '100%'
        },
        cssTo: {
            'height': '10%'
        }
    },
    {
        from: 'doc-top + 37doc = vp-top',
        to: 'doc-top + 42doc = vp-top',
        cssFrom: {
            'height': '10%'
        },
        cssTo: {
            'height': '0%'
        }
    },
    {
        from: 'doc-top + 42doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'height': '0%'
        }
    }
], $('.wrapper'));

$('.mountains-background').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 47doc = vp-top',
         css: {
            'bottom': '-0%'
        }
    },
    {
        from: 'doc-top + 47doc = vp-top',
        to: 'doc-top + 67doc = vp-top',
         cssFrom: {
            'bottom': '-0%'
        },
        cssTo: {
            'bottom': '-30%'
        }
    },
    {
        from: 'doc-top + 67doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
         css: {
            'bottom': '-30%'
        }
    }
], $('.wrapper'));

$('.mountains-front').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 47doc = vp-top',
         css: {
            'bottom': '-0%'
        }
    },
    {
        from: 'doc-top + 47doc = vp-top',
        to: 'doc-top + 67doc = vp-top',
         cssFrom: {
            'bottom': '-0%'
        },
        cssTo: {
            'bottom': '-30%'
        }
    },
    {
        from: 'doc-top + 67doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
         css: {
            'bottom': '-30%'
        }
    }
], $('.wrapper'));

$('.planet').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 67doc = vp-top',
         css: {
            'height': '0%'
        }
    },
    {
        from: 'doc-top + 65doc = vp-top',
        to: 'doc-top + 90doc = vp-top',
         cssFrom: {
            'height': '0%'
        },
        cssTo: {
            'height': '30%'
        }
    },
    {
        from: 'doc-top + 90doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'height': '30%'
        }
    }
], $('.wrapper'));

$('.moon').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 70doc = vp-top',
         css: {
                'top': '202px'
        }
    },
    {
        from: 'doc-top + 70doc = vp-top',
        to: 'doc-top + 80doc = vp-top',
         cssFrom: {
            'top': '202px'
        },
        cssTo: {
            'top': '0px'
        }
    }
], $('.wrapper'));
// arrow down
$('.ardown').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 2doc = vp-top',
        cssFrom: {
            'top': '18px',
            'display' : 'inline-block'
        },
        cssTo: {
            'top': '0px',
            'display' : 'inline-block'
        }
    },
    {
        from: 'doc-top + 2doc = vp-top',
        to: 'doc-top + 11doc = vp-top',
         cssFrom: {
            'top': '0px',
            'display' : 'inline-block'
        },
        cssTo: {
            'top': '200px',
            'display' : 'inline-block'
        }
    },
    {
        from: 'doc-top + 2doc = vp-top',
        to: 'doc-top + 11doc = vp-top',
        css: {
            'top': '200px',
            'display' : 'none'
        }
    }
], $('.wrapper'));
$('.shadowarr').scroolly([
    {
        from: 'doc-top + 4doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
         cssFrom: {
            'width': '136px'
        },
        cssTo: {
            'width': '80px'
        }
    }
], $('.wrapper'));
$('.arrow-down').scroolly([
    {
        from: 'doc-top',
        to: 'doc-top + 11doc = vp-top',
         cssFrom: {
            'opacity': '1'
        },
        cssTo: {
            'opacity': '0'
        }
    }
], $('.wrapper'));

$('.s1text-head').scroolly([
    {
        from: 'doc-top + 0doc = vp-top',
        to: 'doc-top + 6doc = vp-top',
         css: {
            'top': '-1px',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 6doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
         cssFrom: {
            'top': '-1px',
            'display': 'block'
        },
        cssTo: {
            'top': '-600px',
            'display': 'none'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'top': '-600px',
            'display': 'none'
        }
    }
], $('.wrapper'));
$('.s1b-sect').scroolly([
    {
        from: 'doc-top + 0doc = vp-top',
        to: 'doc-top + 9doc = vp-top',
         css: {
            'bottom': '20px',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 9doc = vp-top',
        to: 'doc-top + 10doc = vp-top',
         cssFrom: {
            'bottom': '20px',
            'display': 'block'
        },
        cssTo: {
            'bottom': '0px',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 10doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
         cssFrom: {
            'bottom': '-0px',
            'display': 'block'
        },
        cssTo: {
            'bottom': '-200px',
            'display': 'none'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'bottom': '-200px',
            'display': 'none'
        }
    }
    
], $('.wrapper'));
$('.midea').scroolly([
    {
        from: 'doc-top + 0doc = vp-top',
        to: 'doc-top + 10doc = vp-top',
         css: {
            'top': '56%',
            'opacity': '1',
            'display': 'block'

        }
    },
    {
        from: 'doc-top + 10doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
         cssFrom: {
            'top': '56%',
            'opacity': '1',
            'display': 'block'

        },
        cssTo: {
            'top': '100%',
            'opacity': '0',
            'display': 'none'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
         css: {
            'top': '100%',
            'opacity': '0',
            'display': 'none'

        }
    }
], $('.wrapper'));
$('.s1-headsection').scroolly([
    {
        from: 'doc-top + 0doc= vp-top',
        to: 'doc-top + 10doc = vp-top',
        css: {
               'background-image': 'images/bg-clines.png',
               'display': 'block'
        }
    },
    {
        from: 'doc-top + 10doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
        cssFrom: {
               'background-image': 'images/bg-clines.png',
               'display': 'block'
        },
        cssTo: {
            'background-image': 'transparent',
               'display': 'block'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'background-image': 'transparent',
               'display': 'none'
        }
    }
], $('.wrapper'));
$('.central-sec').scroolly([
    {
        from: 'doc-top + 0doc = vp-top',
        to: 'doc-top + 12doc = vp-top',
        css: {
               'opacity ': '0',
               'display': 'none'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 14doc = vp-top',
        cssFrom: {
               'opacity ': '0',
               'display': 'block'
        },
        cssTo: {
            'opacity ': '1',
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 14doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'opacity ': '1',
            'display': 'block'
        }
    }
], $('.wrapper'));

// section 2

$('.cs-s2').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 18doc = vp-top',
        css: {
               'position': 'relative',
               'left ': '0%',
               'display': 'inline-block',
               'opacity': '1'
        }
    },
    {
        from: 'doc-top + 18doc = vp-top',
        to: 'doc-top + 25doc = vp-top',
        cssFrom: {
               'left ': '0%',
               'display': 'inline-block',
               'opacity': '1'
        },
        cssTo: {
            'left ': '200%',
            'display': 'none',
            // 'opacity': '0'
        }
    },
    {
        from: 'doc-top + 25doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left ': '200%',
            'display': 'none',
            'opacity': '0'
        }

    }
], $('.wrapper'));

//text step

$('.step1').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 25doc = vp-top',
        css: {
               'display': 'none',
               'opacity': '0',
               'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 25doc = vp-top',
        to: 'doc-top + 37doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 37doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }

    }
], $('.wrapper'));

$('.step2').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 37doc = vp-top',
        css: {
               'display': 'none',
               'opacity': '0',
               'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 37doc = vp-top',
        to: 'doc-top + 50doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 50doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }

    }
], $('.wrapper'));
$('.step3').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 50doc = vp-top',
        css: {
               'display': 'none',
               'opacity': '0',
               'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 50doc = vp-top',
        to: 'doc-top + 62doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 62doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }

    }
], $('.wrapper'));
$('.step4').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 62doc = vp-top',
        css: {
               'display': 'none',
               'opacity': '0',
               'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 62doc = vp-top',
        to: 'doc-top + 75doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 75doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }

    }
], $('.wrapper'));
$('.step5').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 75doc = vp-top',
        css: {
               'display': 'none',
               'opacity': '0',
               'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 75doc = vp-top',
        to: 'doc-top + 97doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 97doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }

    }
], $('.wrapper'));
$('.stepb1').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 25doc = vp-top',
        css: {
               'display': 'none',
               'opacity': '0',
               'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 25doc = vp-top',
        to: 'doc-top + 36doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 36doc = vp-top',
        to: 'doc-top + 37doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 37doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }
    }
], $('.wrapper'));
$('.stepb2').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 37doc = vp-top',
        css: {
               'display': 'none',
               'opacity': '0',
               'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 37doc = vp-top',
        to: 'doc-top + 49doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 49doc = vp-top',
        to: 'doc-top + 50doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 50doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }
    }
], $('.wrapper'));
$('.s3-headsection').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 25doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 25doc = vp-top',
        to: 'doc-top + 50doc = vp-top',
        css: {
            'display': 'block',
            'opacity': '1',
            'transition': 'all 0.7s ease'
        }
    },
    {
        from: 'doc-top + 50doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'none',
            'opacity': '0',
            'transition': 'all 0.7s ease'
        }
    }
], $('.wrapper'));

// planes
$('.plane3').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 30doc = vp-top',
        css: {
               'left': '0.001%',
               'opacity': '0',
               'top': '100.001%',
               'transform': 'rotate(0deg)'
        }
    },
    {
        from: 'doc-top + 30doc = vp-top',
        to: 'doc-top + 32doc = vp-top',
        cssFrom: {
               'left': '1.001%',
               'opacity': '1',
               'top': '90.001%',
               'width': '1.001%',
               'transform': 'rotate(0deg)'
        },
        cssTo: {
            'left': '47.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '19.001%',
               'transform': 'rotate(0deg)'
        }
    },
    {
        from: 'doc-top + 32doc = vp-top',
        to: 'doc-top + 39doc = vp-top',
        css: {
            'left': '47.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '19.001%',
               'transform': 'rotate(0deg)'
        }
    },
    {
        from: 'doc-top + 39doc = vp-top',
        to: 'doc-top + 40doc = vp-top',
        cssFrom: {
               'left': '47.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '19.001%',
               'transform': 'rotate(0deg)'
        },
        cssTo: {
            'left': '100%',
            'opacity': '1',
            'top': '0%',
            'width': '5.001%'
        }
    },
    {
        from: 'doc-top + 40doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100%',
            'opacity': '1',
            'top': '0%',
            'width': '5%'
        }
    }

], $('.wrapper'));
$('.planes2').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 45doc = vp-top',
        css: {
               'left': '20.001%',
               'top': '100.001%',
               'opacity': '0',
               'transform': 'rotate(0deg)'
        }
    },
    {
        from: 'doc-top + 45doc = vp-top',
        to: 'doc-top + 47doc = vp-top',
        cssFrom: {
               'left': '20.001%',
               'opacity': '1',
               'top': '90.001%',
               'width': '1.001%',
               'transform': 'rotate(0deg)'
        },
        cssTo: {
            'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '29.001%',
               'transform': 'rotate(0deg)'
        }
    },
    {
        from: 'doc-top + 47doc = vp-top',
        to: 'doc-top + 49doc = vp-top',
        css: {
               'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '29.001%',
               'transform': 'rotate(0deg)'
        }
    },
    {
        from: 'doc-top + 49doc = vp-top',
        to: 'doc-top + 52doc = vp-top',
        cssFrom: {
               'left': '40.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '29.001%',
               'transform': 'rotate(0deg)'
        },
        cssTo: {
            'left': '100.001%',
            'opacity': '1',
            'top': '0%',
            'width': '7.001%'
        }
    },
    {
        from: 'doc-top + 52doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100.001%',
            'opacity': '1',
            'top': '0%',
            'width': '7.001%'
        }
    }
], $('.wrapper'));
$('.planes3').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 54doc = vp-top',
        css: {
               'left': '20.001%',
               'top': '100.001%',
               'opacity': '0',
               'transform': 'rotate(0.001deg)'
        }
    },
    {
        from: 'doc-top + 54doc = vp-top',
        to: 'doc-top + 57doc = vp-top',
        cssFrom: {
               'left': '20.001%',
               'opacity': '1',
               'top': '90.001%',
               'width': '1.001%'
        },
        cssTo: {
            'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '45.001%'
        }
    },
    {
        from: 'doc-top + 59doc = vp-top',
        to: 'doc-top + 64doc = vp-top',
        css: {
               'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '45.001%'
        },
    },
    {
        from: 'doc-top + 64doc = vp-top',
        to: 'doc-top + 67doc = vp-top',
        cssFrom: {
               'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '45.001%'
        },
        cssTo: {
            'left': '100.001%',
            'opacity': '1',
            'top': '0%',
            'width': '7.001%'
        }
    },
    {
        from: 'doc-top + 67doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100.001%',
            'opacity': '1',
            'top': '0%',
            'width': '7.001%'
        }
    }
], $('.wrapper'));
$('.planes4').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 67doc = vp-top',
        css: {
               'left': '20.001%',
               'top': '100.001%',
               'opacity': '0'
        }
    },
    {
        from: 'doc-top + 67doc = vp-top',
        to: 'doc-top + 74doc = vp-top',
        cssFrom: {
               'left': '20.001%',
               'opacity': '1',
               'top': '90.001%',
               'width': '1.001%'
        },
        cssTo: {
            'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '36.001%'
        }
    },
    {
        from: 'doc-top + 74doc = vp-top',
        to: 'doc-top + 76doc = vp-top',
        css: {
               'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '36.001%'
        },
    },
    {
        from: 'doc-top + 76doc = vp-top',
        to: 'doc-top + 79doc = vp-top',
        cssFrom: {
               'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '36.001%'
        },
        cssTo: {
            'left': '120.001%',
            'opacity': '1',
            'top': '0%',
            'width': '7.001%'
        }
    },
    {
        from: 'doc-top + 79doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '120.001%',
            'opacity': '1',
            'top': '0%',
            'width': '7.001%'
        }
    }
], $('.wrapper'));
$('.planes5').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 86doc = vp-top',
        css: {
               'left': '20.001%',
               'top': '100.001%',
               'opacity': '0'
        }
    },
    {
        from: 'doc-top + 86doc = vp-top',
        to: 'doc-top + 89doc = vp-top',
        cssFrom: {
               'left': '20.001%',
               'opacity': '1',
               'top': '90.001%',
               'width': '1.001%'
        },
        cssTo: {
            'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '45.001%'
        }
    },
    {
        from: 'doc-top + 89doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '43.001%',
               'opacity': '1',
               'top': '26.001%',
               'width': '45.001%'
        }
    },
], $('.wrapper'));
// end planes

$('.central-sec2').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 25doc = vp-top',
        css: {
               'display ': 'none'
        }
    },
    {
        from: 'doc-top + 25doc = vp-top',
        to: 'doc-top + 35doc = vp-top',
        css: {
            'display': 'block'
        }
    }
], $('.wrapper'));

$('.bg-rsec').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 93doc = vp-top',
        css: {
               'top': '100%',
               'bottom': '0',
               'left': '0',
               'right': '0'
        }
    },
    {
        from: 'doc-top + 93doc = vp-top',
        to: 'doc-top + 95doc = vp-top',
        cssFrom: {
               'top': '100%',
               'bottom': '0',
               'left': '0',
               'right': '0'
        },
        cssTo: {
            'top': '0',
            'bottom': '0',
            'left': '0',
            'right': '0'
        }
    },
    {
        from: 'doc-top + 95doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'top': '0',
            'bottom': '0',
            'left': '0',
            'right': '0'
        }
    }
], $('.wrapper'));

// star

$('.star').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 80doc = vp-top',
        css: {
            'display': 'none'
        }
    },
    {
        from: 'doc-top + 80doc = vp-top',
        to: 'doc-top + 85doc = vp-top',
        css: {
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 85doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'block'
        }
    }
], $('.wrapper'));
$('.star-down').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 80doc = vp-top',
        css: {
            'display': 'none'
        }
    },
    {
        from: 'doc-top + 80doc = vp-top',
        to: 'doc-top + 85doc = vp-top',
        css: {
            'display': 'block'
        }
    },
    {
        from: 'doc-top + 85doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'display': 'block'
        }
    }
], $('.wrapper'));

// cloud

$('.cloud-r2').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 57doc = vp-top',
        cssFrom: {
            'right': '25%',
              'top': '36%'
        },
        cssTo: {
            'right': '0%',
            'top': '36%'
        }
    },
    {
        from: 'doc-top + 57doc = vp-top',
        to: 'doc-top + 62doc = vp-top',
        cssFrom: {
            'right': '-0%'
        },
        cssTo: {
            'right': '-50%'
        }
    },
    {
        from: 'doc-top + 62doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'right': '-50%'
        }
    }
], $('.wrapper'));

$('.cloud-l3').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 57doc = vp-top',
        cssFrom: {
            'left': '4%'
        },
        cssTo: {
            'left': '100%'
        }
    },
    {
        from: 'doc-top + 57doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100%'
        }
    }
], $('.wrapper'));

$('.cloud-l4').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 12doc = vp-top',
        cssFrom: {
            'left': '-25%'
        },
        cssTo: {
            'left': '0%'
        }
    },
    {
        from: 'doc-top + 12doc = vp-top',
        to: 'doc-top + 40doc = vp-top',
        cssFrom: {
            'left': '0%'
        },
        cssTo: {
            'left': '100%'
        }
    },
    {
        from: 'doc-top + 40doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100%'
        }
    }
], $('.wrapper'));

$('.cloud-r3').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 40doc = vp-top',
        cssFrom: {
            'left': '-25.001%'
        },
        cssTo: {
            'left': '0.001%'
        }
    },
    {
        from: 'doc-top + 40doc = vp-top',
        to: 'doc-top + 68doc = vp-top',
        cssFrom: {
            'left': '0.001%'
        },
        cssTo: {
            'left': '100.001%'
        }
    },
    {
        from: 'doc-top + 68doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100.001%'
        }
    }
], $('.wrapper'));  

$('.cloud-r6').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 20doc = vp-top',
        cssFrom: {
            'left': '-25%'
        },
        cssTo: {
            'left': '0%'
        }
    },
    {
        from: 'doc-top + 20doc = vp-top',
        to: 'doc-top + 68doc = vp-top',
        cssFrom: {
            'left': '0%'
        },
        cssTo: {
            'left': '100%'
        }
    },
    {
        from: 'doc-top + 68doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100%'
        }
    }
], $('.wrapper'));

$('.cloud-l2').scroolly([
    {
        from: 'doc-top = vp-top',
        to: 'doc-top + 35doc = vp-top',
        cssFrom: {
            'left': '-25%'
        },
        cssTo: {
            'left': '0%'
        }
    },
    {
        from: 'doc-top + 35doc = vp-top',
        to: 'doc-top + 60doc = vp-top',
        cssFrom: {
            'left': '0%'
        },
        cssTo: {
            'left': '100%'
        }
    },
    {
        from: 'doc-top + 60doc = vp-top',
        to: 'doc-top + 100doc = vp-top',
        css: {
            'left': '100%'
        }
    }
], $('.wrapper'));
