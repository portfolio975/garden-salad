// モーダルウィンドウ
jQuery("#js-modal-open").on("click", function(e) {
  e.preventDefault();
  jQuery(".contact__modal").addClass("modal-open");
  jQuery(".contact__modal-overlay").addClass("overlay-open");
  jQuery("body").css("overflow-y", "hidden");
});

jQuery("#js-modal-close").on("click", function(e) {
  e.preventDefault();
  jQuery(".contact__modal").removeClass("modal-open");
  jQuery(".contact__modal-overlay").removeClass("overlay-open");
  jQuery("body").css("overflow-y", "auto");
});

// トップへ戻るボタン
jQuery(window).on("scroll", function() {
  if (100 < jQuery(window).scrollTop()) {
    jQuery(".page-top-button").addClass("is-show");
  } else {
    jQuery(".page-top-button").removeClass("is-show");
  }
});

// jQuery(".page-top-button").on("click", function () {
//   jQuery("html, body").animate({scrollTop:0}, 500);
// });

jQuery('a[href^="#"]').on("click", function(e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or linear
  );
});