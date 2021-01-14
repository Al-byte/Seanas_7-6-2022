$(document).ready(() => {
    $(".modal").on('show.bs.modal', function () {
     var firstItem = $(this).find(".item:first");
     if ( !firstItem.hasClass("active") ) {
       $(this).find(".active").removeClass("active");
       firstItem.addClass("active");
     }
   });
 });