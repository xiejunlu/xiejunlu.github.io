$(function() {
    var TOTAL = 5;
    var clicked = [];
    var img_text_map = {
        'word0': 'was',
        'word1': 'your',
        'word2': 'how',
        'word3': 'find',
        'word4': 'see',
        'word5': 'number',
        'word6': 'water',
        'word7': 'means',
        'word8': 'home',
        'word9': 'ask',
        'word10': 'animal',
        'word11': 'picture',
        'word12': 'world',
        'word13': 'letter',
        'word14': 'country',
        'word15': 'thought',
        'word16': 'together',
        'word17': 'walk',
        'word18': 'student',
        'word19': 'list',
        'word20': 'family',
        'word21': 'body',
        'word22': 'however',
        'word23': 'become',
        'word24': 'hold',
        'word25': 'war',
        'word26': 'king',
        'word27': 'I',
        'word28': 'quickly',
        'word29': 'decided',
        'word30': 'understand',
        'word31': 'thousand',
        'word32': 'dark',
        'word33': 'less',
        'word34': 'surface',
        'word35': 'anything',
        'word36': 'heart',
        'word37': 'summer',
        'word38': 'interest',
        'word39': 'brother',
        'word40': 'sign',
        'word41': 'remember',
        'word42': 'baby',
        'word43': 'section',
        'word44': 'iron',
        'word45': 'consonant',
        'word46': 'speak',
        'word47': 'kill',
        'word48': 'die',
        'word49': 'ear',
        'word50': 'us',
        'word51': 'information',
        'word52': 'control',
        'word53': 'trouble',
        'word54': 'history',
        'word55': 'human',
        'word56': 'not',
        'word57': 'indicate',
        'word58': 'electric',
        'word59': 'blood',
        'word60': 'rich',
        'word61': 'sadness',
        'word62': 'wife',
        'word63': 'does',
        'word64': 'will',
        'word65': 'substance',
        'word66': 'deal',
        'word67': 'experience',
        'word68': 'oxygen',
        'word69': 'forward',
        
    };
    var getIdxByClassName = function(className) {
            return className.substring(4);
    };
    var clickedCnt = 0;
    $(".indicator").text(clickedCnt + "/" + TOTAL);
    
    $(".button").mouseenter(function(e) {
        // Get the first class name (image0, image1, etc)
        var className = $(e.target).attr('class').split(' ')[0];
        // Get idx (0, 1, etc)
        var idx = getIdxByClassName(className);

        // Play hover sound
        var audio = new Audio("hover-sound" + idx + ".mp3");
        audio.play();
    });
    
    $(".button").click(function(e) {
        // Get the first class name (image0, image1, etc)
        var className = $(e.target).attr('class').split(' ')[0];

        // Change background to black
        $(e.target).css({background: "black"});
        
        clicked.push(className);
        clickedCnt += 1;
        $(".indicator").text(clickedCnt + "/" + TOTAL);

        if (clickedCnt === TOTAL) {
            // Switch view
            $("#view-1").fadeOut("slow").delay(5000).fadeIn("show");
            $("#view-2").fadeIn("slow").delay(5000).fadeOut('slow', function() {
                clicked = [];
            });
            $('.indicator').html('0/5');
            make_circles_dance();
            clickedCnt = 0;


            // Play sound: this recurse function is to make a queue of sounds and play them in order
            var recurse = function(i) {
                if (i === TOTAL) { return; }

                // For div image* Play the sound "after_sound*.mp3"
                var audio = new Audio("after_sound" + getIdxByClassName(clicked[i]) + ".mp3");
                audio.addEventListener('ended', function() {
                    recurse(i + 1);
                });
                audio.play();
            };
            recurse(0);

            // Display text
            var displayText = clicked.map(function(i) { return img_text_map[i]; }).join(' ');
            $(".text-box").text(displayText);
        }
    })

});

function hover() {
   var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    $(".change").css("background-color",newColor);
    $(".intro").css("color",newColor);
}

function make_circles_dance() {
  $(".button").each(function() {
    var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
    var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
    $(this).css("top",topPosition).css("left",leftPosition);
    var newSize = Math.floor(Math.random()*106) + "px";
    $(this).css("width",newSize).css("height",newSize);
    var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(".button").css("background-color",newColor);
  });
}

//  function makeCircles() {
//       $(".button").each(function() {
//         $(this).show();

//         var wHeight = $(window).height() - 120;
//         var wWidth = $(window).width() - 120;
//         var topPosition = Math.random() * wHeight - wHeight/2 + "px";
//         var leftPosition = Math.random() * wWidth - wWidth/2 + "px";

//         $(this).css("transform", "translate(" + leftPosition + "," + topPosition + ")");

//         var newSize = Math.floor(Math.random() * 100) + "px";
//         $(this).css("width", newSize).css("height", newSize);
//       });
//     }




$(".change").mouseenter(function() {
    hover();
    make_circles_dance();
    $('.indicator').css("display","inline");
    $('.intro').addClass("hide");
    
  
});

$(".change").mouseleave(function() {
   $(".change").css("background-color","#f00");
});





