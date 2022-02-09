$(document).ready(function(){
    init();
});


function init(){

    // MicroModal.init()

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 160,
        gutter: 20,
        fitWidth: true
    });

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
        imgsrc = $(this).children('img').attr('src')
        title = $(this).attr("ptitle");
        artist = $(this).attr("partist");
        style = $(this).attr("pstyle");
        wikilink = $(this).attr("pwikilink");
        $(this).click(function(){
            $('.modal-img').attr("src", imgsrc);
            $(".modal-title").text(title);
            $(".modal-content").html(
                "Artist: "+artist+"<br>"+
                "Style: "+style);
            $(".modal").removeClass("hidden");
            $('.modal-wiki').attr("href",wikilink)
        });
    })
}