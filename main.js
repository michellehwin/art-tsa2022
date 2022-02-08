$(document).ready(function(){
    init();
});


function init(){

    // MicroModal.init()

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 160,
        gutter: 20
    });

    $(".modal-container").click(function(e){
        e.stopPropagation();
    });

    $('.modal').click(function(){
        $('.modal').addClass('hidden');
    });

    $('.painting').each(function(index){
        title = $(this).attr("ptitle");
        artist = $(this).attr("partist");
        style = $(this).attr("pstyle");

        $(this).click(function(){
            $(".modal-title").text(title);
            $(".modal-content").html(
                "Artist: "+artist+"<br>"+
                "Style: "+style);
            $(".modal").removeClass("hidden");
        });
    })
}