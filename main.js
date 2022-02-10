$(document).ready(function(){
    init();
});


function init(){

    // MicroModal.init()

   

    $(".modal-close").click(function(e){
        $('.modal').addClass('hidden');
    });

    $(".modal-container").click(function(e){
        e.stopPropagation();
    });

    $('.modal').click(function(){
        $('.modal').addClass('hidden');
    });

    $('.painting').each(function(index){
        $(this).click(function(){
            setModal(this);
        });

        resize(this);
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        // columnWidth: 160,
        gutter: 20,
        fitWidth: true
    });
}

function setModal(img){
    imgsrc = $(img).children('img').attr('src')
    title = $(img).attr("ptitle");
    artist = $(img).attr("partist");
    style = $(img).attr("pstyle");
    wikilink = $(img).attr("pwikilink");
    $('.modal-img').attr("src", imgsrc);
    $(".modal-title").text(title);
    $(".modal-content").html(
        "Artist: "+artist+"<br>"+
        "Style: "+style);
    $(".modal").removeClass("hidden");
    $('.modal-wiki').attr("href",wikilink)
}
function resize(img){
    newHeight = Math.floor(Math.random() * 80)+200;
    console.log(newHeight);

    $(img).css('height', newHeight+'px')
}