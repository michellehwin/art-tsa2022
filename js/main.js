console.log(`VW: ${window.innerWidth}`);
console.log(`VH: ${window.innerHeight}`);

sounds = []

$(window).on('load', function () { init(); initSounds(); });

function init() {

    // MicroModal.init()

    $(".modal-close").click(function (e) {
        $('.modal').addClass('hidden');
    });

    $(".modal-container").click(function (e) {
        e.stopPropagation();
    });

    $('.modal').click(function () {
        $('.modal').addClass('hidden');
    });

    $('.painting').each(function (index) {
        $(this).click(function () {
            setModal(this);
        });

        resize(this);
    });

    
}

function setModal(img) {
    imgsrc = $(img).children('img').attr('src');
    title = $(img).attr("ptitle");
    artist = $(img).attr("partist");
    style = $(img).attr("pstyle");
    wikilink = $(img).attr("pwikilink");
    $('.modal-img').attr("src", imgsrc);
    $(".modal-title").text(title);
    $(".modal-content").html(
        "Artist: " + artist + "<br>" +
        "Style: " + style);
    $(".modal").removeClass("hidden");
    $('.modal-wiki').attr("href", wikilink);
}
function resize(img) {
    newHeight = Math.floor(Math.random() * 80) + 200;
    // console.log(newHeight);

    $(img).css('height', newHeight + 'px');
}


function initSounds(){
    $(".audiobutton").each(function(index){
        setSound(this, index);
    });
}

function setSound(t, i){
    sounds[i] = new Audio($(t).attr("soundfile"))
    $(t).click(function(){
        sounds[i].play();
        console.log('playing');
    })
}